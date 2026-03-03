import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { ProjectsProvider } from "./context/ProjectsContext";

export default function App() {
  return (
    <AuthProvider>
      <ProjectsProvider>
        <RouterProvider router={router} />
      </ProjectsProvider>
    </AuthProvider>
  );
}
