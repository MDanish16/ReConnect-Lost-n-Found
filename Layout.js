import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Search, Plus, Home, Heart } from "lucide-react";

export default function Layout({ children }) {
  const location = useLocation();

  const isActive = (pageName) => {
    return location.pathname === createPageUrl(pageName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-900/90 backdrop-blur-md shadow-lg border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={createPageUrl("Home")} className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">ReConnect</h1>
                <p className="text-xs text-gray-400 -mt-1">Lost & Found</p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link
                to={createPageUrl("Home")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive("Home")
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-600/10"
                }`}
              >
                <Home className="w-4 h-4" />
                <span className="font-medium">Home</span>
              </Link>
              <Link
                to={createPageUrl("Items")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive("Items")
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/20"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-600/10"
                }`}
              >
                <Search className="w-4 h-4" />
                <span className="font-medium">Browse Items</span>
              </Link>
              <Link
                to={createPageUrl("Submit")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive("Submit")
                    ? "bg-green-600/20 text-green-400 border border-green-500/20"
                    : "text-gray-300 hover:text-green-400 hover:bg-green-600/10"
                }`}
              >
                <Plus className="w-4 h-4" />
                <span className="font-medium">Post Item</span>
              </Link>
            </nav>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center gap-2">
              <Link
                to={createPageUrl("Items")}
                className="p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-blue-600/10 transition-colors"
              >
                <Search className="w-5 h-5" />
              </Link>
              <Link
                to={createPageUrl("Submit")}
                className="p-2 rounded-lg text-gray-400 hover:text-green-400 hover:bg-green-600/10 transition-colors"
              >
                <Plus className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-700 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white">ReConnect</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Helping reunite people with their belongings, one item at a time.
            </p>
            <p className="text-xs text-gray-500">
              © 2024 ReConnect. Built with care for the community.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 safe-area-pb">
        <div className="flex items-center justify-around py-2">
          <Link
            to={createPageUrl("Home")}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive("Home")
                ? "text-blue-400"
                : "text-gray-500"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link
            to={createPageUrl("Items")}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive("Items")
                ? "text-blue-400"
                : "text-gray-500"
            }`}
          >
            <Search className="w-5 h-5" />
            <span className="text-xs font-medium">Browse</span>
          </Link>
          <Link
            to={createPageUrl("Submit")}
            className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
              isActive("Submit")
                ? "text-green-400"
                : "text-gray-500"
            }`}
          >
            <Plus className="w-5 h-5" />
            <span className="text-xs font-medium">Post</span>
          </Link>
        </div>
      </div>
    </div>
  );
}