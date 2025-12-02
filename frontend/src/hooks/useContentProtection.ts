import { useEffect } from 'react';

export const useContentProtection = () => {
    useEffect(() => {
        // Disable right-click
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault();
        };

        // Disable image dragging
        const handleDragStart = (e: DragEvent) => {
            e.preventDefault();
        };

        // Disable specific keyboard shortcuts
        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent Print Screen (PrtScn)
            if (e.key === 'PrintScreen') {
                navigator.clipboard.writeText(''); // Clear clipboard
                alert('Screenshots are disabled on this website.');
                return;
            }

            // Prevent Ctrl+S (Save), Ctrl+P (Print), Ctrl+U (View Source), Ctrl+Shift+I (DevTools)
            if (
                (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u')) ||
                (e.ctrlKey && e.shiftKey && e.key === 'i')
            ) {
                e.preventDefault();
                return;
            }
        };

        document.addEventListener('contextmenu', handleContextMenu);
        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu);
            document.removeEventListener('dragstart', handleDragStart);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
};
