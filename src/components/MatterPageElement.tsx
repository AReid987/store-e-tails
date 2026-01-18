import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import Matter from 'matter-js';

interface MatterPageElementProps {
    engine: Matter.Engine | null;
    text: string;
}

function MatterPageElement({ engine, text }: MatterPageElementProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    const bodyRef = useRef<Matter.Body>(null);

    useEffect(() => {
        if (!engine || !elementRef.current) return;

        const el = elementRef.current;
        // Create a Matter.js body for this element
        // Position it relative to the parent HTML overlay (which is the page)
        // The x,y here are relative to the page's HTML element
        const body = Matter.Bodies.rectangle(
            Math.random() * 150 + 50, // Random initial x
            20,  // Initial y (top of page)
            text.length * 8 + 10, // Width based on text
            20,  // Height
            { restitution: 0.3, friction: 0.5 }
        );
        bodyRef.current = body;
        Matter.World.add(engine.world, body);

        return () => {
            if (bodyRef.current) {
                Matter.World.remove(engine.world, bodyRef.current);
            }
        };
    }, [engine, text]);

    useFrame(() => {
        if (bodyRef.current && elementRef.current) {
            const pos = bodyRef.current.position;
            const angle = bodyRef.current.angle;
            elementRef.current.style.transform = ;
        }
    });

    return <div ref={elementRef} className="matter-element">{text}</div>;
}

export default MatterPageElement;
