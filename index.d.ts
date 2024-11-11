import { LexicalEditor } from "lexical";
import React from "react";

declare namespace Lexical {
  export type EditorThemeClassName =
    React.HTMLAttributes<HTMLDivElement>["className"];
}
