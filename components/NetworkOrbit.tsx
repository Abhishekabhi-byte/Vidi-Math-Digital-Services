"use client";

import { motion } from "framer-motion";
import { divisions } from "@/data/content";

const CX = 300;
const CY = 300;
const R = 210;

function pos(i: number, total: number) {
  const angle = (Math.PI * 2 * i) / total - Math.PI / 2;
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  };
}

export default function NetworkOrbit({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={compact ? "w-full max-w-md" : "w-full max-w-xl"}
      role="img"
      aria-label="Vidi Meth at the centre of its five business divisions"
    >
      <motion.circle
        cx={CX}
        cy={CY}
        r={R}
        fill="none"
        stroke="var(--color-ink)"
        strokeOpacity={0.14}
        strokeDasharray="2 10"
        strokeLinecap="round"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 90 }}
        style={{ transformOrigin: "300px 300px" }}
      />

      {divisions.map((d, i) => {
        const p = pos(i, divisions.length);
        const stroke = d.color === "gold" ? "var(--color-gold)" : "var(--color-teal)";
        return (
          <g key={d.name}>
            <motion.line
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke={stroke}
              strokeWidth={1.5}
              strokeOpacity={0.55}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.55 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={compact ? 30 : 38}
              fill="var(--color-paper)"
              stroke={stroke}
              strokeWidth={1.5}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r={compact ? 30 : 38}
              fill="none"
              stroke={stroke}
              strokeWidth={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.35, 0], scale: [1, 1.35, 1.35] }}
              transition={{ repeat: Infinity, duration: 3.2, delay: i * 0.4, ease: "easeOut" }}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
            />
            <text
              x={p.x}
              y={p.y + 4}
              textAnchor="middle"
              className="font-mono"
              fontSize={compact ? 8.5 : 10.5}
              fill="var(--color-ink)"
            >
              {d.name}
            </text>
          </g>
        );
      })}

      <motion.circle
        cx={CX}
        cy={CY}
        r={compact ? 52 : 64}
        fill="var(--color-ink)"
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <text
        x={CX}
        y={CY - 4}
        textAnchor="middle"
        className="font-display"
        fontSize={compact ? 20 : 26}
        fill="var(--color-paper)"
      >
        VM
      </text>
      <text
        x={CX}
        y={CY + 16}
        textAnchor="middle"
        className="font-mono"
        fontSize={compact ? 7 : 8}
        letterSpacing="1.5"
        fill="var(--color-gold-soft)"
      >
        PARENT
      </text>
    </svg>
  );
}
