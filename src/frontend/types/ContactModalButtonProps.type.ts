import React from "react";

export interface ContactModalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  bgColor: string;
  textColor: string;
}
