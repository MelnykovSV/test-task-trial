import { Route, Routes } from "react-router-dom";
import { Container } from "./App.styled";
import { ModernNormalize } from "emotion-modern-normalize";
import { Suspense, lazy } from "react";
import { ToastContainer } from "react-toastify";
import { SharedLayout } from "../SharedLayout/SharedLayout";
import StyledLoader from "../../ui/StyledLoader/StyledLoader";

const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() =>
  import("../../pages/FavoritesPage/FavoritesPage")
);
const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CatalogBody = lazy(() => import("../../pages/CatalogBody/CatalogBody"));

function App() {
  return (
    <Container>
      <ModernNormalize />
      <Suspense fallback={<StyledLoader />}>
        <Routes>
          <Route element={<SharedLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />}>
              <Route index element={<CatalogBody />}></Route>
            </Route>
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<div>404 page</div>} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}

export default App;
