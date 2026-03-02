import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TemplateSelector } from './components/TemplateSelector';
import { ConsentForm } from './components/ConsentForm';
import { useDoctorInfo } from './hooks/useDoctorInfo';
import { useFormState } from './hooks/useFormState';
import { downloadPdf, printPdf, calibratePdf } from './lib/pdf/generatePdf';

export default function App() {
  const isCalibrateMode = new URLSearchParams(window.location.search).has('calibrate');

  const { doctor, updateDoctor } = useDoctorInfo();
  const { form, loadTemplate, resetForm, setField, setEye } = useFormState();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        <TemplateSelector onSelect={loadTemplate} />
        <ConsentForm
          form={form}
          doctor={doctor}
          onFormChange={setField}
          onEyeChange={setEye}
          onDoctorChange={updateDoctor}
          onClear={resetForm}
          onDownload={() => downloadPdf(form, doctor)}
          onPrint={() => printPdf(form, doctor)}
          calibrateMode={isCalibrateMode}
          onCalibrate={calibratePdf}
        />
      </main>
      <Footer />
    </div>
  );
}
