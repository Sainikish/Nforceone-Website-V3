"use client";

import React from "react";
import FeatureCarousel, { FeatureItem } from "@/components/ui/feature-carousel";
import {
  Building02Icon,
  GlobalSearchIcon,
  Layers01Icon,
  ShieldCheckIcon,
  DashboardSquare01Icon,
  UserGroup02Icon,
} from "@hugeicons/core-free-icons";

export const ENGAGEMENT_CAROUSEL_ITEMS: FeatureItem[] = [
  {
    id: "onshore",
    label: "Onshore Delivery",
    icon: Building02Icon,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    description: "US-based senior engineers and client-facing teams for close strategic collaboration and real-time roadmap alignment.",
  },
  {
    id: "offshore",
    label: "Offshore Scale",
    icon: GlobalSearchIcon,
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
    description: "India-based scalable engineering and QA delivery teams providing deep technical depth, speed, and cost efficiency.",
  },
  {
    id: "hybrid",
    label: "Hybrid Model",
    icon: Layers01Icon,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200",
    description: "A synchronized US + India model that balances local proximity with round-the-clock global scale for every engagement.",
  },
  {
    id: "managed-delivery",
    label: "Managed Delivery",
    icon: ShieldCheckIcon,
    image: "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description: "NForceOne owns defined delivery outcomes, SLA accountability, and engineering responsibilities end-to-end.",
  },
  {
    id: "project-sow",
    label: "Project / SOW",
    icon: DashboardSquare01Icon,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
    description: "Defined scope, milestones, and deliverables structured under a fixed-engagement timeline with guaranteed quality.",
  },
  {
    id: "staff-augmentation",
    label: "Staff Augmentation",
    icon: UserGroup02Icon,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200",
    description: "Flexible, role-based senior engineering capacity that integrates seamlessly and scales up or down with your roadmap.",
  },
];

export default function EngagementCarousel() {
  return (
    <FeatureCarousel
      items={ENGAGEMENT_CAROUSEL_ITEMS}
      themeColor="#62B2FE"
    />
  );
}
