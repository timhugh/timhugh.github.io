"use client";

import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);

interface TimeStampProps extends React.HTMLAttributes<HTMLTimeElement> {
	date: Date;
}

export default function TimeStamp({ date, ...props }: TimeStampProps) {
	const timeAgo = new TimeAgo("en-US");
	const relativeTime = timeAgo.format(date);
	return (
		<time
			dateTime={date.toISOString()}
			aria-description={`Published ${date.toLocaleString()}`}
			{...props}
		>
			{relativeTime}
		</time>
	);
}
