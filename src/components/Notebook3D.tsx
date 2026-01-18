import React, { useState, useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const BOOK_MODEL_URL = 'https://market.pmnd.rs/api/pkg/primary/Suspense-book.glb';

interface Notebook3DProps {
    isOpen: boolean;
    onClick: () => void;
    onBookReady: () => void;
}

function Notebook3D({ isOpen, onClick, onBookReady }: Notebook3DProps) {
    const group = useRef<THREE.Group>(null);
    const { scene, animations } = useGLTF(BOOK_MODEL_URL);
    const { actions } = useAnimations(animations, group);
    const { camera } = useThree();

    const bookScene = useMemo(() => scene.clone(), [scene]);

    useEffect(() => {
        if (onBookReady) onBookReady();
    }, [onBookReady, scene]);


    useEffect(() => {
        // This model doesn't have open/close animations. We'll fake it with camera.
        // If your model has animations:
        // const animName = isOpen ? "BookOpen" : "BookClose";
        // if (actions[animName]) {
        //     actions[animName].reset().setLoop(THREE.LoopOnce, 1).play();
        //     actions[animName].clampWhenFinished = true;
        // }
    }, [isOpen, actions]);

    useFrame((state, delta) => {
        if (group.current && !isOpen) {
            // Slow rotation when closed is handled by PresentationControls
        }
        // Camera positioning is handled by PresentationControls or explicitly in App
    });

    return (
        <primitive
            ref={group}
            object={bookScene}
            scale={isOpen ? 1.8 : 1.2} // Adjust scale
            onClick={(e) => {
                e.stopPropagation();
                if (onClick && !isOpen) onClick();
            }}
            position={[0, -0.2, 0]}
        />
    );
}

useGLTF.preload(BOOK_MODEL_URL);

export default Notebook3D;
