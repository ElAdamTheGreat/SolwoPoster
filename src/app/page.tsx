'use client'
import React, { useRef, useCallback } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';

export default function Page() {
  const posterRef = useRef(null);
  const exportToPdf = useCallback(() => {
    if (posterRef.current !== null) {
      const printDPI = 300;
      const scale = printDPI / 96;
      html2canvas(posterRef.current, { scale: scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        
        // A3 size is 297mm x 420mm.
        const pdf = new jsPDF('p', 'mm', 'a3');
        pdf.addImage(imgData, 'PNG', 0, 0, 297, 420);
        pdf.save("SolwoPlakát.pdf");
      });
    }
  }, []);

  const exportToJpg = useCallback(() => {
    if (posterRef.current !== null) {
      const printDPI = 300;
      const scale = printDPI / 96;
      html2canvas(posterRef.current, { scale: scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/jpeg').replace("image/jpeg", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'SolwoPlakát.jpg';
        link.href = imgData;
        link.click();
      });
    }
  }, []);

  const exportToPng = useCallback(() => {
    if (posterRef.current !== null) {
      const printDPI = 300;
      const scale = printDPI / 96;
      html2canvas(posterRef.current, { scale: scale }).then(canvas => {
        const imgData = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
        const link = document.createElement('a');
        link.download = 'SolwoPlakát.png';
        link.href = imgData;
        link.click();
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center gap-5 pb-10">
      <Poster ref={posterRef} />
      <div className="flex gap-10">
        <button onClick={exportToPdf} className="text-3xl rounded-2xl bg-green-700 hover:bg-green-800 ease-out duration-300 text-white py-3 px-6">Export to PDF</button>
        <button onClick={exportToJpg} className="text-3xl rounded-2xl bg-green-700 hover:bg-green-800 ease-out duration-300 text-white py-3 px-6">Export to JPG</button>
        <button onClick={exportToPng} className="text-3xl rounded-2xl bg-green-700 hover:bg-green-800 ease-out duration-300 text-white py-3 px-6">Export to PNG</button>
      </div>
    </div>
  );
}
Page.displayName = 'Page';


const Poster = React.forwardRef<HTMLDivElement>((props, ref) => (
  <div ref={ref} style={{
      width: '297mm',
      height: '420mm',
      backgroundImage: `url('/yo2.png')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
  }}>
    <div className="flex flex-col gap-7 pt-16 px-10 w-full">
      <div className="flex flex-col gap-5 items-center border-b border-zinc-500 text-zinc-200 w-full pb-5">
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 h-[72px]">
                <p className="text-7xl font-bold">Solwo</p>
              </div>
              <p className="text-4xl font-semibold">Systém pro zadávání ticketů</p>
              <p className="text-2xl text-zinc-400">Webová aplikace</p>
            </div>

            <div className="flex gap-3 text-3xl">
              <div className="flex flex-col gap-3">
                <p>Autor projektu:</p>
                <p>Vedoucí práce:</p>
              </div>
              <div className="flex flex-col font-semibold gap-3">
                <p>Adam Gombos</p>
                <p>Sergey Kuroedov</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3 pt-3">
            <div className="flex flex-col items-center font-semibold">
              <img src="/logo.jpg" alt="logo" width={128}/>
              <p className="text-[33px]">SPŠEaG</p>
              <p className="text-2xl">V Úžlabině</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <div className="flex justify-between ">
          <div className="flex flex-col justify-center gap-3">
            <CodeLine>Webová aplikace</CodeLine>
            <CodeLine>Prostor pro řešení problémů</CodeLine>
            <CodeLine>Uživatelsky přívětivětivá</CodeLine>
            <CodeLine>Responzivní design</CodeLine>
            <CodeLine>Tmavý motiv</CodeLine>
          </div>
          <div>
            <div className="border-[3px] border-zinc-600 rounded-2xl overflow-hidden">
              <img src="/solwo_[id]2.png" alt="" width={550}/>
            </div>
          </div>
        </div>
        <div className="flex gap-12 justify-center h-[450px] px-10">
            <div className="border-[3px] border-zinc-600 rounded-2xl overflow-hidden">
              <img src="/solwo_dash2.png" alt=""/>
            </div>
            <div className="border-[3px] border-zinc-600 rounded-2xl overflow-hidden">
              <img src="solwo_slug2.png" alt=""/>
            </div>
        </div>
      </div>

      <p className="text-3xl font-semibold text-center">Použité technologie:</p>
      <div className="grid grid-cols-5 gap-5">
         <Card title="Next.js">
          <p>Jednoduše nejlepší React framework</p>
         </Card>
         <Card title="TypeScript">
          <p>Přísná typová korektnost dat</p>
         </Card>
         <Card title="Tailwind CSS">
          <p>Efektivní, moderní a responzivní design</p>
         </Card>
         <Card title="Prisma">
          <p>Pohodlná práce s databází</p>
         </Card>
         <Card title="tRPC">
          <p>Komunikace mezi serverem a klientem</p>
         </Card>
      </div>
        <a className="flex rounded-lg" href="https://vercel.com/?utm_source=t3-oss&amp;utm_campaign=oss" rel="noopener noreferrer" target="_blank">
          <img src="powered-by-vercel.svg" className="h-10 w-full" alt="Běží na Vercel"/>
        </a>
        <p className="text-center text-lg text-zinc-300">Plakát byl vytvořen ve formě webové aplikace.</p>

    </div>
  </div>
));
Poster.displayName = 'Poster';

function CodeLine({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <p className="text-4xl font-bold">&gt;</p>
      <p className="text-3xl pt-2">{children}</p>
    </div>
  );
}

function Card({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="border-2 border-zinc-700 rounded-xl overflow-hidden">
      <div className="bg-zinc-700 p-2 px-4 ">
        <p className="text-2xl font-semibold">{title}</p>
      </div>
      <div className="p-3 bg-zinc-700/50 h-full">
        {children}
      </div>
    </div>
  );
}