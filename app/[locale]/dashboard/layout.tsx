"use client";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import checkAuth from "../middleware/auth";
import { useLocale } from "next-intl";
import Head from "next/head";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { push } = useRouter();
    const localActive = useLocale();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            push(`/${localActive}/dashboard/admin`);
        } else {
            checkAuth(token).then((data) => {
                if (!data.success) {
                    push(`/${localActive}/dashboard/admin`);
                }
            });
        }
    }, []);

    return (
        <html lang="en">
            <Head>
                <title>Admin dashboard</title>
            </Head>
            <body className={roboto.className}>{children}</body>
        </html>
    );
}
