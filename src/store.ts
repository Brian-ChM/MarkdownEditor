import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface TextState {
  title: string;
  content: string;
  expand: boolean;
  setExpand: () => void;
  setTitle: (newTitle: string) => void;
  setText: (newText: string) => void;
}

const getInitialState = () => {
  try {
    const storedState = JSON.parse(
      localStorage.getItem("markdownStore") ?? "{}"
    );
    return {
      title: storedState.title || "",
      content: storedState.content || "# Markdown",
    };
  } catch {
    return {
      title: "",
      content: "# Markdown",
    };
  }
};

const useMarkdownStore = create<TextState>()(
  devtools(
    persist(
      (set) => ({
        ...getInitialState(),
        expand: false,
        setExpand: () => set((state) => ({ expand: !state.expand })),
        setTitle: (newTitle) => set({ title: newTitle }),
        setText: (newContent) => set({ content: newContent }),
      }),
      { name: "markdownStore" }
    )
  )
);

export default useMarkdownStore;
