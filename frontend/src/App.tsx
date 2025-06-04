
import { Toaster } from "@/components/ui/toaster.tsx";
import { Toaster as Sonner } from "@/components/ui/sonner.tsx";
import { TooltipProvider } from "@/components/ui/tooltip.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider.tsx";
import Index from "./pages";
import NotFound from "./pages/NotFound.tsx";
import Login from "./pages/Login.tsx";
import Signup from "./pages/Signup.tsx";
import Profile from "./pages/Profile.tsx";
import Browse from "./pages/Browse.tsx";
import DishDetail from "./pages/DishDetail.tsx";
import Cart from "./pages/Cart.tsx";
import OrderTracking from "./pages/OrderTracking.tsx";
import PrivateRoute from "@/components/privateroute/PrivateRoute.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login/:type" element={<Login />} />
            <Route path="/signup/:type" element={<Signup />} />
            <Route path="/profile" element={


              <PrivateRoute>
              <Profile/>
              </PrivateRoute>



              } />
            <Route path="/browse" element={
              <PrivateRoute>
                <Browse />
              </PrivateRoute>
              } />
            <Route path="/dish/:id" element={


              <PrivateRoute>
              <DishDetail />
              </PrivateRoute>




            } />
            <Route path="/cart" element={

              <PrivateRoute>
              <Cart />
              </PrivateRoute>

            } />
            <Route path="/tracking/:id" element={<OrderTracking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
