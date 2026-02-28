import { Header } from './components/Header';
import { Footer } from './components/Footer';
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
      <Footer />
    </div>
  );
}
