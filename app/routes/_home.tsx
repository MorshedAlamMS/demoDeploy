import { Outlet, useLocation, useNavigation } from "@remix-run/react";
import { useEffect } from "react";
import Footer from "~/components/shared/Footer";
import { Loading } from "~/components/shared/loading/Loading";
import Navbar from "~/components/shared/navbar/Navbar";

export default function HomeLayout() {
  const location = useLocation();
  const navigation = useNavigation();

  // * Check if we are doing an "internal" transition (only search changes) or moving to a new route.
  const isInternalTransition =
    navigation.location?.pathname === location.pathname;

  // * Show spinner only if we’re navigating (state === 'loading') and moving to a different route.
  const showSpinner = navigation.state === "loading" && !isInternalTransition;

  // * Scroll to top when loading starts
  useEffect(() => {
    if (showSpinner) {
      if (window !== undefined) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, [showSpinner]);

  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-350px)]">
        {showSpinner ? (
          <div className="h-[500px] flex items-center justify-center">
            <Loading />
          </div>
        ) : null}
        {!showSpinner ? <Outlet /> : null}
      </main>
      <Footer />
    </>
  );
}
