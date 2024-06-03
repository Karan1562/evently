import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Evently",
  description: "Eventlly is a platform for event managment",
  icons: "/assets/images/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <SignedOut>
            <div className="flex justify-center items-center min-h-screen">
              <SignIn routing="hash" />
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
            {children}
          </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
