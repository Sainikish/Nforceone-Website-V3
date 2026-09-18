"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import styles from "./NF1ThreeCube.module.css";

export default function NF1ThreeCube() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let animationFrameId: number;
    let isDisposed = false;

    // 1. SCENE & CAMERA SETUP
    const width = container.clientWidth || 420;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 2. STUDIO LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(4, 5, 5);
    scene.add(keyLight);

    // Crimson rim-light to match NForce One brand
    const rimLightCrimson = new THREE.DirectionalLight(0xef4444, 3.8);
    rimLightCrimson.position.set(-5, -3, -3);
    scene.add(rimLightCrimson);

    const fillLightCool = new THREE.DirectionalLight(0x60a5fa, 1.2);
    fillLightCool.position.set(-4, 4, 3);
    scene.add(fillLightCool);

    // Front specular glint light
    const frontGlint = new THREE.PointLight(0xffffff, 1.6, 12);
    frontGlint.position.set(0, 0, 4);
    scene.add(frontGlint);

    // 3. GENERATE "NF1 - LET'S DO IT" 3x3 SLICED TEXTURES
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    // 3 distinct mechanical parts / slices like a real Rubik's cube
    const topPartGroup = new THREE.Group();    // Part 1: Top layer (y = 1)
    const midPartGroup = new THREE.Group();    // Part 2: Middle layer (y = 0)
    const bottomPartGroup = new THREE.Group(); // Part 3: Bottom layer (y = -1)

    cubeGroup.add(topPartGroup);
    cubeGroup.add(midPartGroup);
    cubeGroup.add(bottomPartGroup);

    // Default dark metallic material for all non-front faces
    const createSideMaterial = (subtleGlow = false) => {
      const sideCanvas = document.createElement("canvas");
      sideCanvas.width = 256;
      sideCanvas.height = 256;
      const sCtx = sideCanvas.getContext("2d")!;

      // Dark brushed obsidian background
      const grad = sCtx.createRadialGradient(128, 128, 10, 128, 128, 160);
      grad.addColorStop(0, "#1c1d22");
      grad.addColorStop(1, "#0a0a0c");
      sCtx.fillStyle = grad;
      sCtx.fillRect(0, 0, 256, 256);

      // Fine carbon grid
      sCtx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      sCtx.lineWidth = 1;
      for (let i = 0; i <= 256; i += 32) {
        sCtx.beginPath();
        sCtx.moveTo(i, 0);
        sCtx.lineTo(i, 256);
        sCtx.stroke();
        sCtx.beginPath();
        sCtx.moveTo(0, i);
        sCtx.lineTo(256, i);
        sCtx.stroke();
      }

      // Beveled rounded sticker outline
      sCtx.strokeStyle = subtleGlow ? "rgba(239, 68, 68, 0.45)" : "rgba(255, 255, 255, 0.12)";
      sCtx.lineWidth = 4;
      sCtx.strokeRect(8, 8, 240, 240);

      const tex = new THREE.CanvasTexture(sideCanvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      return new THREE.MeshStandardMaterial({
        map: tex,
        roughness: 0.35,
        metalness: 0.85,
      });
    };

    const defaultSideMat = createSideMaterial(false);
    const accentSideMat = createSideMaterial(true);

    // Master 1024x1024 canvas for "NF1 - LET'S DO IT"
    const masterCanvas = document.createElement("canvas");
    masterCanvas.width = 1024;
    masterCanvas.height = 1024;
    const mCtx = masterCanvas.getContext("2d")!;

    // Load the official high-definition transparent logo image
    const logoImg = new window.Image();
    logoImg.src = "/images/nforceone-logo-hd.png";

    const buildCubies = () => {
      // 1. Draw Master Texture
      // Dark high-tech background
      mCtx.fillStyle = "#0c0d11";
      mCtx.fillRect(0, 0, 1024, 1024);

      // Subtle high-tech diagonal striping
      mCtx.strokeStyle = "rgba(255, 255, 255, 0.03)";
      mCtx.lineWidth = 2;
      for (let x = -1024; x < 2048; x += 32) {
        mCtx.beginPath();
        mCtx.moveTo(x, 0);
        mCtx.lineTo(x + 1024, 1024);
        mCtx.stroke();
      }

      // Radial crimson flare centered behind the logo
      const flare = mCtx.createRadialGradient(512, 480, 40, 512, 480, 480);
      flare.addColorStop(0, "rgba(220, 38, 38, 0.35)");
      flare.addColorStop(0.55, "rgba(220, 38, 38, 0.07)");
      flare.addColorStop(1, "transparent");
      mCtx.fillStyle = flare;
      mCtx.fillRect(0, 0, 1024, 1024);

      // Draw the complete HD NForceOne logo with balanced, authentic spacing between NF1 and Let's Do IT!
      if (logoImg.complete && logoImg.naturalWidth > 0) {
        const scale = 0.72;
        const logoW = Math.round(logoImg.naturalWidth * scale);
        const logoH = Math.round(logoImg.naturalHeight * scale);
        const logoX = Math.round((1024 - logoW) / 2);
        // Align the valley between NF1 and Let's Do IT with the horizontal cubie seam at y = 682
        const logoY = Math.round(682 - 608 * scale);

        // Radiant brand glow behind the artwork
        mCtx.shadowColor = "rgba(239, 68, 68, 0.65)";
        mCtx.shadowBlur = 36;
        mCtx.drawImage(logoImg, logoX, logoY, logoW, logoH);
        mCtx.shadowBlur = 0;
      } else {
        // Fallback vector drawing if image is still loading
        mCtx.font = "italic 900 240px sans-serif";
        mCtx.textAlign = "center";
        mCtx.textBaseline = "middle";
        mCtx.fillStyle = "#ffffff";
        mCtx.fillText("NF", 420, 460);
        mCtx.fillStyle = "#e60000";
        mCtx.fillText("1", 620, 460);

        mCtx.font = "900 68px sans-serif";
        mCtx.fillStyle = "#ffffff";
        mCtx.fillText("LET'S DO IT", 512, 730);
      }

      // 2. Slice into 3x3 front textures
      const frontTextures: THREE.CanvasTexture[][] = [];
      const sliceSize = 1024 / 3;

      for (let r = 0; r < 3; r++) {
        frontTextures[r] = [];
        for (let c = 0; c < 3; c++) {
          const subCanvas = document.createElement("canvas");
          subCanvas.width = 341;
          subCanvas.height = 341;
          const sCtx = subCanvas.getContext("2d")!;

          // Draw slice from master
          sCtx.drawImage(
            masterCanvas,
            c * sliceSize,
            r * sliceSize,
            sliceSize,
            sliceSize,
            0,
            0,
            341,
            341
          );

          // Dark beveled metallic inner border for each cubie sticker
          sCtx.strokeStyle = "rgba(255, 255, 255, 0.2)";
          sCtx.lineWidth = 6;
          sCtx.strokeRect(6, 6, 329, 329);

          sCtx.strokeStyle = "rgba(0, 0, 0, 0.7)";
          sCtx.lineWidth = 4;
          sCtx.strokeRect(10, 10, 321, 321);

          const tex = new THREE.CanvasTexture(subCanvas);
          tex.colorSpace = THREE.SRGBColorSpace;
          frontTextures[r][c] = tex;
        }
      }

      // 3. Assemble 27 Cubies
      const cubieSize = 0.94;
      const spacing = 1.02;
      const cubieGeo = new THREE.BoxGeometry(cubieSize, cubieSize, cubieSize);

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          for (let z = -1; z <= 1; z++) {
            const col = x + 1; // 0, 1, 2
            const row = 1 - y; // 0, 1, 2 (top to bottom)

            // Front face (+Z) is material index 4 in Three.js BoxGeometry
            let frontMat: THREE.Material = defaultSideMat;
            if (z === 1) {
              frontMat = new THREE.MeshStandardMaterial({
                map: frontTextures[row][col],
                roughness: 0.28,
                metalness: 0.75,
              });
            }

            const materials: THREE.Material[] = [
              x === 1 ? accentSideMat : defaultSideMat, // +X (Right)
              x === -1 ? defaultSideMat : defaultSideMat, // -X (Left)
              y === 1 ? defaultSideMat : defaultSideMat, // +Y (Top)
              y === -1 ? defaultSideMat : defaultSideMat, // -Y (Bottom)
              frontMat,                                   // +Z (Front)
              defaultSideMat                              // -Z (Back)
            ];

            const cubie = new THREE.Mesh(cubieGeo, materials);
            cubie.position.set(x * spacing, y * spacing, z * spacing);

            // Assign cubie to one of the 3 real cube parts
            if (y === 1) {
              topPartGroup.add(cubie);
            } else if (y === 0) {
              midPartGroup.add(cubie);
            } else {
              bottomPartGroup.add(cubie);
            }
          }
        }
      }

      setIsLoaded(true);
    };

    if (logoImg.complete) {
      buildCubies();
    } else {
      logoImg.onload = buildCubies;
      logoImg.onerror = buildCubies;
    }

    // 4. ANIMATION TIMELINE: REAL 3-PART CUBE ROLLING -> 5-SECOND PAUSE -> RESUME
    // Total cycle: 6.0s rolling (3 parts twisting + reduced speed tumble) + 5.0s pause (crystal-clear front view) = 11.0s loop
    const ROLLING_DURATION = 6.0; // seconds of dynamic rolling and layer twisting
    const PAUSE_DURATION = 5.0;   // seconds of stopped, crystal-clear NF1 front face
    const CYCLE_DURATION = ROLLING_DURATION + PAUSE_DURATION;

    const startTime = performance.now();

    // Easing helpers
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const interpolateSlice = (
      t: number,
      t0: number,
      t1: number,
      fromAngle: number,
      toAngle: number
    ) => {
      if (t <= t0) return fromAngle;
      if (t >= t1) return toAngle;
      const p = (t - t0) / (t1 - t0);
      return fromAngle + (toAngle - fromAngle) * easeInOutCubic(p);
    };

    // 5. RENDER LOOP
    const animate = () => {
      if (isDisposed) return;
      animationFrameId = requestAnimationFrame(animate);

      const now = performance.now();
      const elapsed = (now - startTime) / 1000;
      const cycleTime = elapsed % CYCLE_DURATION;

      if (cycleTime < ROLLING_DURATION) {
        // ==========================================
        // PHASE 1: REAL CUBE ROLLING WITH 3 PARTS
        // Reduced speed + independent mechanical layer twists
        // ==========================================
        const rollProgress = cycleTime / ROLLING_DURATION;
        const timeVal = cycleTime * 1.05; // Smooth, controlled speed (reduced pace)

        // Gentle, majestic 3D tumbling of the whole cube
        const gentlePitch = Math.sin(timeVal * 1.2) * 0.65 + Math.cos(timeVal * 0.6) * 0.3;
        const gentleYaw = timeVal * 0.95 + Math.sin(timeVal * 1.3) * 0.4;
        const gentleRoll = Math.sin(timeVal * 1.1) * 0.35;

        // Smooth settle toward rotation (0, 0, 0) during the last 25% of rolling
        if (rollProgress > 0.75) {
          const settleProgress = (rollProgress - 0.75) / 0.25;
          const ease = easeInOutCubic(settleProgress);

          const targetY = Math.round(gentleYaw / (Math.PI * 2)) * Math.PI * 2;
          const targetX = Math.round(gentlePitch / (Math.PI * 2)) * Math.PI * 2;
          const targetZ = 0;

          cubeGroup.rotation.x = THREE.MathUtils.lerp(gentlePitch, targetX, ease);
          cubeGroup.rotation.y = THREE.MathUtils.lerp(gentleYaw, targetY, ease);
          cubeGroup.rotation.z = THREE.MathUtils.lerp(gentleRoll, targetZ, ease);
        } else {
          cubeGroup.rotation.x = gentlePitch;
          cubeGroup.rotation.y = gentleYaw;
          cubeGroup.rotation.z = gentleRoll;
        }

        // ==========================================
        // INDEPENDENT 3-PART MECHANICAL LAYER ROTATIONS
        // ==========================================
        // Part 1: Top Layer (y = 1) - twists 90°, then to 180°, then snaps back flush
        let topRot = 0;
        if (cycleTime < 0.4) {
          topRot = 0;
        } else if (cycleTime < 1.8) {
          topRot = interpolateSlice(cycleTime, 0.4, 1.8, 0, Math.PI / 2);
        } else if (cycleTime < 2.4) {
          topRot = Math.PI / 2;
        } else if (cycleTime < 3.6) {
          topRot = interpolateSlice(cycleTime, 2.4, 3.6, Math.PI / 2, Math.PI);
        } else if (cycleTime < 4.7) {
          topRot = interpolateSlice(cycleTime, 3.6, 4.7, Math.PI, 0);
        } else {
          topRot = 0;
        }
        topPartGroup.rotation.y = topRot;

        // Part 2: Middle Layer (y = 0) - twists 90° then resolves back flush
        let midRot = 0;
        if (cycleTime < 1.6) {
          midRot = 0;
        } else if (cycleTime < 2.8) {
          midRot = interpolateSlice(cycleTime, 1.6, 2.8, 0, Math.PI / 2);
        } else if (cycleTime < 3.4) {
          midRot = Math.PI / 2;
        } else if (cycleTime < 4.6) {
          midRot = interpolateSlice(cycleTime, 3.4, 4.6, Math.PI / 2, 0);
        } else {
          midRot = 0;
        }
        midPartGroup.rotation.y = midRot;

        // Part 3: Bottom Layer (y = -1) - twists -90° (opposite direction) then resolves flush
        let botRot = 0;
        if (cycleTime < 0.6) {
          botRot = 0;
        } else if (cycleTime < 2.0) {
          botRot = interpolateSlice(cycleTime, 0.6, 2.0, 0, -Math.PI / 2);
        } else if (cycleTime < 3.0) {
          botRot = -Math.PI / 2;
        } else if (cycleTime < 4.4) {
          botRot = interpolateSlice(cycleTime, 3.0, 4.4, -Math.PI / 2, 0);
        } else {
          botRot = 0;
        }
        bottomPartGroup.rotation.y = botRot;

        // Animate specular glint light during roll
        frontGlint.intensity = 1.2 + Math.sin(timeVal * 2.5) * 0.4;
        frontGlint.position.x = Math.sin(timeVal * 1.8) * 2;
      } else {
        // ==========================================
        // PHASE 2: 5-SECOND STOPPED ALIGNMENT
        // All 3 parts locked flush; "NF1 - LET'S DO IT" 100% CLEAR
        // ==========================================
        const stopProgress = (cycleTime - ROLLING_DURATION) / PAUSE_DURATION;

        // All 3 parts are locked flush
        topPartGroup.rotation.y = 0;
        midPartGroup.rotation.y = 0;
        bottomPartGroup.rotation.y = 0;

        // Locked perfectly front-facing
        cubeGroup.rotation.x = 0;
        cubeGroup.rotation.y = 0;
        cubeGroup.rotation.z = 0;

        // Slow, elegant specular sheen sweeps across the face during the 5 seconds
        const sheenAngle = stopProgress * Math.PI;
        frontGlint.intensity = 2.2 + Math.sin(sheenAngle) * 0.8;
        frontGlint.position.x = -2.5 + stopProgress * 5.0; // sweeps left to right
        frontGlint.position.y = 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 6. RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 420;
      const h = container.clientHeight || 420;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // 7. CLEANUP
    return () => {
      isDisposed = true;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);

      // Dispose geometries and materials
      cubeGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });

      renderer.dispose();
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className={styles.cubeWrapper}>
      {/* Ambient background glow & floor shadow */}
      <div className={styles.cubeAura} aria-hidden="true" />
      <div className={styles.cubeFloorShadow} aria-hidden="true" />

      {/* Three.js Canvas Container */}
      <div ref={mountRef} className={styles.canvasContainer} />

      {/* Loading placeholder while Three.js initializes */}
      {!isLoaded && (
        <div className={styles.placeholder}>
          <div className={styles.spinner} />
        </div>
      )}
    </div>
  );
}
