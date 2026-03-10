import { useEffect, useRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  charLimit?: number;
}

export function Textarea({ label, id, required, charLimit, ...props }: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const currentLen = (props.value as string | undefined)?.length ?? 0;
  const ratio = charLimit ? currentLen / charLimit : 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;
  }, [props.value]);

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-600">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <textarea
        ref={ref}
        id={id}
        className="border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-none overflow-y-auto max-h-48"
        {...props}
      />
      {charLimit && (
        <p className={`text-xs text-right ${ratio > 1 ? 'text-red-500' : 'text-slate-400'}`}>
          {currentLen} / {charLimit}
        </p>
      )}
    </div>
  );
}
