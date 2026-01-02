"use client";
import { ArrowRight } from 'lucide-react';

interface FlowButtonProps {
    text?: string;
    className?: string;
}

export function FlowButton({ text = "Scopri i Servizi", className = "" }: FlowButtonProps) {
    return (
        <button className={`group relative flex items-center gap-1 overflow-hidden rounded-[1px] border-[1px] border-white bg-transparent px-8 py-3 text-sm font-normal text-white cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:text-black hover:border-[2px] active:scale-[0.95] ${className}`}>
            {/* Left arrow (arr-2) */}
            <ArrowRight
                className="absolute w-4 h-4 left-[-25%] stroke-white fill-none z-[9] group-hover:left-4 group-hover:stroke-black transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />

            {/* Text */}
            <span className="relative z-[1] -translate-x-3 group-hover:translate-x-3 transition-all duration-[800ms] ease-out font-accent uppercase tracking-[0.3em] leading-[1.5] text-[16px] md:text-[18px] text-center whitespace-nowrap">
                {text}
            </span>

            {/* Circle - Using Brand Accent Color */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-[50%] opacity-0 group-hover:w-[600px] group-hover:h-[600px] group-hover:opacity-100 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)]"></span>

            {/* Right arrow (arr-1) */}
            <ArrowRight
                className="absolute w-4 h-4 right-4 stroke-white fill-none z-[9] group-hover:right-[-25%] group-hover:stroke-black transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)]"
            />
        </button>
    );
}
