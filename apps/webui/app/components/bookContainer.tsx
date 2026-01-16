import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { Button } from "@store-e-tail/ui/components/button";
import { cn } from "@store-e-tail/ui";
export interface Page {

    id: string;
    content: React.ReactNode;
}

const IllustratedStoryBook: React.FC = () => {
    const [pages, setPages] = useState<Page[]>([
        {
            id: '1',
            content: (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Chapter 1: The Enchanted Forest</h2>
                    <p className="text-base text-gray-700 text-center">
                        Once upon a time, in a land filled with magic, there was a dense forest. Sunlight
                        dappled through the leaves, creating an ethereal glow...
                    </p>
                    <div className="mt-4 w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image of a magical forest</span>
                    </div>
                </div>
            ),
        },
        {
            id: '2',
            content: (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <p className="text-base text-gray-700 text-center">
                        ...In the heart of this forest lived a young girl named Elara. She loved exploring
                        the woods, discovering its hidden secrets. One day, she stumbled upon a
                        glowing flower...
                    </p>
                    <div className="mt-4 w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image of Elara and a glowing flower</span>
                    </div>
                </div>
            ),
        },
        {
            id: '3',
            content: (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Chapter 2: The Mysterious Key</h2>
                    <p className="text-base text-gray-700 text-center">
                        Elara picked up the flower, and as she did, a tiny, ornate key appeared
                        in her hand. She didn't know where it came from, or what it unlocked...
                    </p>
                    <div className="mt-4 w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image of Elara holding a key</span>
                    </div>
                </div>
            ),
        },
        {
            id: '4',
            content: (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <p className="text-base text-gray-700 text-center">
                        ...Driven by curiosity, Elara searched the forest until she found an old,
                        hidden door. Could this be what the key was for? With a deep breath, she
                        inserted the key and turned...
                    </p>
                    <div className="mt-4 w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image of Elara finding a hidden door</span>
                    </div>
                </div>
            ),
        },
        {
            id: '5',
            content: (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Chapter 3: A New World</h2>
                    <p className="text-base text-gray-700 text-center">
                        The door creaked open, revealing a swirling vortex of colors. Elara stepped
                        through, and found herself in a completely different world...
                    </p>
                    <div className="mt-4 w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image of Elara stepping through a portal</span>
                    </div>
                </div>
            ),
        },
        {
            id: '6',
            content: (
                <div className="flex flex-col items-center justify-center h-full p-4">
                    <p className="text-base text-gray-700 text-center">
                        ...A world of floating islands, friendly dragons, and sparkling rivers. Her
                        adventure had just begun. The end.
                    </p>
                    <div className="mt-4 w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500">Image of a fantastical world</span>
                    </div>
                </div>
            ),
        },
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [isTurningPage, setIsTurningPage] = useState(false);
    const bookContainerRef = useRef<HTMLDivElement>(null);
    const isMobile = useMediaQuery('(max-width: 768px)');

    function useMediaQuery(query: string): boolean {
        const [matches, setMatches] = useState(false);

        useEffect(() => {
            const mediaQueryList = window.matchMedia(query);

            const handleChange = (event: MediaQueryListEvent) => {
                setMatches(event.matches);
            };

            setMatches(mediaQueryList.matches);

            mediaQueryList.addEventListener('change', handleChange);

            return () => {
                mediaQueryList.removeEventListener('change', handleChange);
            };
        }, [query]);

        return matches;
    }

    const turnPageForward = useCallback(() => {
        if (isTurningPage) return;
        setIsTurningPage(true);

        setTimeout(() => {
            setCurrentPage((prevPage) => Math.min(prevPage + (isMobile ? 1 : 2), pages.length - 1));
            setIsTurningPage(false);
        }, 600);
    }, [currentPage, pages.length, isMobile, isTurningPage]);

    const turnPageBackward = useCallback(() => {
        if (isTurningPage) return;
        setIsTurningPage(true);
        setTimeout(() => {
            setCurrentPage((prevPage) => Math.max(prevPage - (isMobile ? 1 : 2), 0));
            setIsTurningPage(false);
        }, 600);
    }, [currentPage, isMobile, isTurningPage]);

    const getDisplayedPages = () => {
        if (isMobile) {
            return [pages[currentPage]];
        } else {
            const page1Index = currentPage;
            const page2Index = currentPage + 1;
            if (page2Index < pages.length) {
                return [pages[page1Index], pages[page2Index]];
            } else if (page1Index < pages.length) {
                return [pages[page1Index]];
            } else {
                return [];
            }
        }
    };

    const displayedPages = getDisplayedPages();
    const মাঝখানেরPage = isMobile? null : pages[currentPage+1];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex items-center justify-center p-4 md:p-8"
        >
            <div
                className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl p-4 md:p-0"
                ref={bookContainerRef}
                style={{
                    aspectRatio: isMobile ? '1 / 1.5' : '2 / 3',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-50/50 rounded-xl -z-10" />

                <div className="absolute top-4 left-4 z-10">
                    <BookOpen className="w-6 h-6 text-gray-600" />
                </div>

                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20">
                    <Button
                        variant="ghost"
                        onClick={turnPageBackward}
                        disabled={currentPage === 0 || isTurningPage}
                        className={(() => {
                            return cn(
                            "rounded-full",
                            "hover:bg-amber-200/50",
                            "transition-colors duration-200",
                            currentPage === 0 && "opacity-50 cursor-not-allowed"
                            )
                        })()}
                    >
                        <ChevronLeft className="w-8 h-8 text-gray-700" />
                    </Button>
                </div>

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20">
                    <Button
                        variant="ghost"
                        onClick={turnPageForward}
                        disabled={currentPage >= pages.length - (isMobile ? 1 : 2) || isTurningPage}
                        className={cn(
                            "rounded-full",
                            "hover:bg-amber-200/50",
                            "transition-colors duration-200",
                            currentPage >= pages.length - (isMobile ? 1 : 2) && "opacity-50 cursor-not-allowed"
                        )}
                    >
                        <ChevronRight className="w-8 h-8 text-gray-700" />
                </Button>
            </div>

                <div
                    className={cn(
                        "relative w-full h-full",
                        "flex",
                        isMobile ? "flex-col" : "flex-row",
                        "transition-all duration-700",
                        "overflow-hidden rounded-xl"
                    )}
                >
                    <AnimatePresence>
                        {displayedPages.map((page, index) => {
                            const isLeft = !isMobile && index === 0;
                            const pageNumber = isMobile ? currentPage + 1 : currentPage + index + 1;
                            return (
                                <motion.div
                                    key={page?.id}
                                    className={cn(
                                        "absolute inset-0",
                                        "flex items-center justify-center",
                                        "bg-white rounded-xl",
                                        "transition-transform duration-700",
                                        isMobile
                                            ? `z-[${pages.length - currentPage}]`
                                            : isLeft
                                                ? "md:left-0 md:z-10 origin-top-right"
                                                : "md:right-0 md:z-0 origin-top-left",
                                        "shadow-md"
                                    )}
                                    initial={{ opacity: 0, rotateY: isLeft ? -180 : 180 }}
                                    animate={{ opacity: 1, rotateY: 0 }}
                                    exit={{ opacity: 0, rotateY: isLeft ? -180 : 180 }}
                                    style={{
                                        width: isMobile ? '100%' : '50%',
                                        transformStyle: 'preserve-3d',
                                    }}
                                >
                                    <div className="w-full h-full flex flex-col">
                                        <div className="absolute top-2.5 left-2.5 text-gray-500 text-sm z-10">
                                            {pageNumber}
                                        </div>
                                        {page.content}
                                    </div>
                                </motion.div>
                            );
                        })}
                         {/* 중앙 페이지 (뒷면) */}
                        {!isMobile && currentPage + 1 < pages.length && (
                            <motion.div
                                key={ মাঝখানেরPage?.id}
                                className={cn(
                                    "absolute inset-0 flex items-center justify-center bg-white rounded-xl md:left-1/2 md:z-5 origin-top-left shadow-md",
                                     "border-l border-gray-300/50" // Add a subtle left border for the seam
                                )}
                                style={{
                                    width: '50%',
                                    transformStyle: 'preserve-3d',
                                    rotateY: isTurningPage && currentPage % 2 === 0 ? '-20deg' : '20deg',
                                    transition: isTurningPage ? 'transform 0.6s ease' : 'none',
                                }}
                                initial={{ opacity: 0}}
                                animate={{ opacity: 1}}
                                exit={{opacity: 0}}

                            >
                                 <div className="w-full h-full flex flex-col">
                                    <div className="absolute top-2.5 left-2.5 text-gray-500 text-sm z-10">
                                         {currentPage + 2}
                                    </div>
                                    { মাঝখানেরPage?.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default IllustratedStoryBook;
