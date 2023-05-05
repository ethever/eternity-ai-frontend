import toast from "react-hot-toast";

export function darkToast(text: string, icon?: JSX.Element | string | null) {
  toast(text, {
    icon,
    style: {
      display: "flex",
      justifyContent: "center",
      borderRadius: "1000px",
      background: "#333",
      color: "#fff",
    },
  });
}
