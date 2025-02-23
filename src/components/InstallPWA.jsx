import { useState, useEffect } from "react";

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault(); // Prevent default install prompt
            setDeferredPrompt(e);
        });
    }, []);

     const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User installed the app");
                } else {
                    console.log("User dismissed the install prompt");
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <button
            onClick={handleInstallClick}
            style={{
                padding: "10px 20px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Install App
        </button>
    );
};

export default InstallPWA;
