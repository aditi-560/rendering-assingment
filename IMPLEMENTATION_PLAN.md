
# DailyEdge Rendering Demo - Implementation Plan

## Overview
This project demonstrates the three main rendering modes in Next.js 15:
1.  **Static Site Generation (SSG)**: For the "About" page.
2.  **Server-Side Rendering (SSR)**: For the "Dashboard" page.
3.  **Incremental Static Regeneration (ISR)**: For the "Breaking News" page.

## Implementation Details

### 1. Global Styling & Layout
- **Theme**: Implemented a premium "Dark Mode" aesthetic using Tailwind CSS v4 variables.
- **Components**: Added a `Navbar` with glassmorphism effect for seamless navigation.
- **Home**: Created a landing page that visually explains the three modes.

### 2. Static Rendering (SSG) - `/about`
- **Config**: Default behavior (implicitly static) or `export const revalidate = false`.
- **Behavior**: The build timestamp is generated once at build time and never changes on refresh.
- **Use Case**: Static content like "About Us" pages.

### 3. Dynamic Rendering (SSR) - `/dashboard`
- **Config**: `export const dynamic = 'force-dynamic'`.
- **Behavior**: Fetches user data and generates a timestamp on *every* request.
- **Use Case**: Personalized dashboards, real-time analytics.

### 4. Hybrid Rendering (ISR) - `/breaking-news`
- **Config**: `export const revalidate = 60`.
- **Behavior**: The page is static but regenerates in the background after 60 seconds if a new request comes in.
- **Use Case**: specific content that needs to be fresh but can tolerate a small delay (news, blogs).

## How to Test
1.  Navigate to `/about`. Note the "BUILD TIMESTAMP". Refresh. It stays the same.
2.  Navigate to `/dashboard`. Note the timestamp. Refresh. It updates *every time*.
3.  Navigate to `/breaking-news`. Note the "Generated At" time. Refresh immediately (it stays). Wait 60s, refresh again (it updates).
