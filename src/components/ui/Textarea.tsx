import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  charLimit?: number;
}

export function Textarea({ label, id, required, charLimit, ...props }: TextareaProps) {
  const currentLen = (props.value as string | undefined)?.length ?? 0;
  const ratio = charLimit ? currentLen / charLimit : 0;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-slate-600">
        {label}{required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <textarea
        id={id}
        rows={3}
        className="border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent resize-y"
        {...props}
        maxLength={charLimit}
      />
      {charLimit && (
        <p className={`text-xs text-right ${ratio > 1 ? 'text-red-500' : 'text-slate-400'}`}>
          {currentLen} / {charLimit}
        </p>
      )}
    </div>
  );
}
