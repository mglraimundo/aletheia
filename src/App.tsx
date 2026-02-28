import { Header } from './components/Header';
import { TemplateSelector } from './components/TemplateSelector';
import { ConsentForm } from './components/ConsentForm';
import { BuildMode } from './components/BuildMode';
import { useDoctorInfo } from './hooks/useDoctorInfo';
import { useFormState } from './hooks/useFormState';
import { previewPdf, printPdf } from './lib/pdf/generatePdf';
import type { FormState } from './types';

export default function App() {
  const isBuildMode = new URLSearchParams(window.location.search).has('build');

  const { doctor, updateDoctor } = useDoctorInfo();
  const { form, loadTemplate, resetForm, setField, setEye } = useFormState();

  if (isBuildMode) return <BuildMode />;

  function handleFormChange(field: keyof FormState, value: FormState[keyof FormState]) {
    setField(field, value);
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        <TemplateSelector onSelect={loadTemplate} />
        <ConsentForm
          form={form}
          doctor={doctor}
          onFormChange={handleFormChange}
          onEyeChange={setEye}
          onDoctorChange={updateDoctor}
          onClear={resetForm}
          onPreview={() => previewPdf(form, doctor)}
          onPrint={() => printPdf(form, doctor)}
        />
      </main>
      <footer className="text-center flex flex-col gap-1 pt-2 pb-8">
        <a
          href="https://github.com/mglraimundo/aletheia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-slate-500 hover:text-sky-600 transition-colors"
        >
          Aletheia — Plataforma de Consentimentos Informados
        </a>
        <p className="text-xs text-slate-400">Desenvolvido por Miguel Raimundo</p>
      </footer>
    </div>
  );
}
