import { jsPDF } from "jspdf";
import type { Product } from "@/data/products";

export function downloadDatasheet(p: Product) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();

  // Header band
  doc.setFillColor(30, 64, 175);
  doc.rect(0, 0, W, 90, "F");
  doc.setTextColor(255);
  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.text("CompuServidores LR", 40, 40);
  doc.setFontSize(11);
  doc.setFont("helvetica", "normal");
  doc.text("Ficha técnica de producto", 40, 60);

  // Title
  let y = 130;
  doc.setTextColor(20, 30, 60);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text(p.name, 40, y);
  y += 22;
  doc.setFontSize(11);
  doc.setTextColor(90);
  doc.setFont("helvetica", "normal");
  doc.text(`${p.brand} · ${p.category} · ${p.subcategory}`, 40, y);
  y += 24;

  // Description
  doc.setTextColor(30);
  doc.setFontSize(11);
  const desc = doc.splitTextToSize(p.description, W - 80);
  doc.text(desc, 40, y);
  y += desc.length * 14 + 12;

  // Specs table
  const rows: [string, string][] = [
    ["Marca", p.brand],
    ["Categoría", p.category],
    ["Subcategoría", p.subcategory],
    ["Generación CPU", p.cpuGen ?? "-"],
    ["Memoria", p.memoryCapacity ?? "-"],
    ["Almacenamiento", p.storageType ?? "-"],
    ["Compatibilidad", p.compatibility ?? "-"],
  ];

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(20, 30, 60);
  doc.text("Especificaciones", 40, y);
  y += 14;

  doc.setDrawColor(210);
  doc.line(40, y, W - 40, y);
  y += 10;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  rows.forEach(([k, v]) => {
    doc.setTextColor(90);
    doc.text(k, 50, y);
    doc.setTextColor(30);
    const val = doc.splitTextToSize(v, W - 250);
    doc.text(val, 220, y);
    y += Math.max(16, val.length * 14);
    doc.setDrawColor(235);
    doc.line(40, y - 6, W - 40, y - 6);
  });

  // Footer
  const H = doc.internal.pageSize.getHeight();
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text(
    "CompuServidores LR · ventas@compuservidoreslr.com · +57 300 000 0000 · Bogotá, Colombia",
    40,
    H - 30,
  );

  doc.save(`ficha-${p.id}.pdf`);
}
