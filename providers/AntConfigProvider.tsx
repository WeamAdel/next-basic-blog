"use client";
import { ConfigProvider } from "antd";
import React, { type PropsWithChildren } from "react";

export default function AntConfigProvider({ children }: PropsWithChildren) {
	return (
		<ConfigProvider
			theme={{
				hashed: false,
				token: {
					colorPrimary: "black",
				},
			}}
		>
			{children}
		</ConfigProvider>
	);
}
