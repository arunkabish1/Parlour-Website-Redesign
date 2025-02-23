import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import { useState, useEffect } from "react";

// Custom Hook for PWA Installation
const usePWAInstall = (setIsOpen) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      console.log("👍 PWA Install Prompt Available!");
      setDeferredPrompt(e);
      setIsOpen(true); // Open modal automatically
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        console.log(choiceResult.outcome === "accepted"
          ? "🎉 User installed the app"
          : "❌ User dismissed the install prompt"
        );
        setDeferredPrompt(null);
      });
    }
  };

  return { handleInstallClick, canInstall: !!deferredPrompt };
};

const ExampleWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { handleInstallClick, canInstall } = usePWAInstall(setIsOpen);

  return (
    <div className="">
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} handleInstallClick={handleInstallClick} canInstall={canInstall} />
    </div>
  );
};


const Modal = ({ isOpen, setIsOpen, handleInstallClick, canInstall }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-violet-600 to-indigo-600 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-white w-16 h-16 mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Flawless Beauty, Instant App
              </h3>
              <p className="text-center mb-6">
                Experience a fast, lightweight beauty app—no downloads needed!
                Install now for instant access to Beauty services! 💅✨
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded"
                >
                  Nah, go back
                </button>
                {canInstall && (
                  <button
                    onClick={() => {
                      setIsOpen(false); // Close modal
                      handleInstallClick(); // Trigger PWA installation
                    }}
                    className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded"
                  >
                    Install Today
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExampleWrapper;
