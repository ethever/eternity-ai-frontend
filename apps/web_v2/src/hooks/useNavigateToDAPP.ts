export default function useNavigateToDAPP() {
  const mode = import.meta.env.MODE;
  if (mode === "development") return "http://localhost:8000";
  return "https://eternity-ai-frontend.pages.dev";
}
