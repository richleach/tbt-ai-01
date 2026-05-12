import type { Metadata } from "next";
import RideWithUsContent from "./ride-with-us-content";

export const metadata: Metadata = {
  title: "Ride With Us — The Beaten Trail",
  description:
    "Where The Beaten Trail rides, when we ride, and how to join us on the trails and on social media.",
};

export default function RideWithUsPage() {
  return <RideWithUsContent />;
}
