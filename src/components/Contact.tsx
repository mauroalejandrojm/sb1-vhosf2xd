import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  Clock3,
  FileText,
  Github,
  Linkedin,
  Loader2,
  Mail,
  Send,
  ShieldCheck,
} from 'lucide-react';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

type ContactLink = {
  name: string;
  value: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
};

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const contactLinks: ContactLink[] = [
  {
    name: 'Email',
    value: 'mauroalejandrojm@gmail.com',
    description: 'Best for project inquiries',
    href: 'mailto:mauroalejandrojm@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: '/in/mauroalejandrojimenezmedina',
    description: 'Connect or send a direct message',
    href: 'https://www.linkedin.com/in/mauroalejandrojimenezmedina/',
    icon: Linkedin,
    external: true,
  },
  {
    name: 'GitHub',
    value: '/mauroalejandrojm',
    description: 'Projects and open-source work',
    href: 'https://github.com/mauroalejandrojm',
    icon: Github,
    external: true,
  },
  {
    name: 'Resume',
    value: 'Professional experience · PDF',
    description: 'View my background and experience',
    href: 'https://github.com/mauroalejandrojm/mauroalejandrojm/blob/master/pdf/resume.pdf',
    icon: FileText,
    external: true,
  },
];

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>('idle');

  const isSubmitting = submitStatus === 'submitting';

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (submitStatus === 'error') {
      setSubmitStatus('idle');
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setSubmitStatus('error');
      return;
    }

    setSubmitStatus('submitting');

    window.setTimeout(() => {
      const subject = formData.company.trim()
        ? `Project inquiry from ${formData.company.trim()}`
        : 'Project inquiry';

      const body = [
        formData.message.trim(),
        '',
        `Name: ${formData.name.trim()}`,
        `Email: ${formData.email.trim()}`,
        `Company: ${formData.company.trim() || 'Not provided'}`,
      ].join('\n');

      window.location.href = `mailto:mauroalejandrojm@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

      setSubmitStatus('success');
      setFormData(initialFormData);

      window.setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 900);
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-white py-24 dark:border-white/5 dark:bg-dark-800 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-14 max-w-4xl sm:mb-16">
          <div className="mb-6 flex items-center gap-3">
            <span className="section-label font-mono">
              // 06 ─ connect
            </span>

            <span className="h-1 w-1 rounded-full bg-teal-500 dark:bg-teal-400" />

            <span className="section-label font-mono text-teal-500 dark:text-teal-400">
              CONTACT
            </span>
          </div>

          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Let&apos;s solve your next data challenge.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Whether you are modernizing a data platform, improving analytics,
            building AI capabilities, or scaling critical pipelines, I would be
            glad to discuss your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left column */}
          <div className="lg:col-span-5">
            {/* Availability and response time */}
            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <InfoCard
                icon={
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-60 dark:bg-teal-400" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-teal-500 dark:bg-teal-400" />
                  </span>
                }
                label="Availability"
                title="Open for consulting"
                description="Architecture, platforms, pipelines and AI strategy"
              />

              <InfoCard
                icon={
                  <Clock3
                    size={16}
                    className="text-teal-500 dark:text-teal-400"
                  />
                }
                label="Response time"
                title="Within one business day"
                description="Monday through Friday"
              />
            </div>

            {/* Contact methods */}
            <div className="space-y-3">
              {contactLinks.map((link) => (
                <ContactCard key={link.name} link={link} />
              ))}
            </div>

            {/* Services summary */}
            <div className="mt-8 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-white/5 dark:bg-dark-700">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                Ways I can help
              </p>

              <div className="grid gap-3 text-sm text-slate-700 dark:text-slate-300 sm:grid-cols-2">
                {[
                  'Data platform design',
                  'ETL and pipeline delivery',
                  'Cloud data modernization',
                  'Architecture assessments',
                  'AI and data strategy',
                  'Fractional data leadership',
                ].map((service) => (
                  <div key={service} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0 text-teal-500 dark:text-teal-400"
                    />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: application-style contact form */}
          <div className="lg:col-span-7 flex">
            <div className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10 dark:border-white/10 dark:bg-dark-800 dark:shadow-black/30">

              {/* Application window header */}
              <div className="flex items-center border-b border-slate-200 bg-slate-50 px-6 py-3 dark:border-white/5 dark:bg-dark-700/80">
                <div className="flex shrink-0 items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80 dark:bg-red-500/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80 dark:bg-yellow-500/70" />
                  <span className="h-3 w-3 rounded-full bg-teal-500/80 dark:bg-teal-400/70" />
                </div>

                <div className="mx-auto flex items-center gap-2 pr-[52px]">
                  <Mail
                    size={13}
                    className="text-slate-400 dark:text-slate-500"
                  />

                  <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    New contact request
                  </span>
                </div>
              </div>

              {/* Application toolbar */}
              <div className="bg-white px-6 py-5 dark:bg-dark-800">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                      Tell me about your project
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      Share your goals, current challenges, or the type of support you
                      need.
                    </p>
                  </div>

                  <div className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 dark:bg-dark-700">
                    <ShieldCheck
                      size={13}
                      className="text-teal-500 dark:text-teal-400"
                    />

                    <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                      Private inquiry
                    </span>
                  </div>
                </div>
              </div>

              {/* Inset divider */}
              <div className="px-6">
                <div className="border-t border-slate-100 dark:border-white/5" />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex flex-1 flex-col bg-white px-6 py-6 mt-6 dark:bg-dark-800"
              >
                <div className="space-y-6">

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <FormField
                      label="Your name"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      autoComplete="name"
                      required
                    />

                    <FormField
                      label="Work email"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      autoComplete="email"
                      required
                    />
                  </div>

                  <FormField
                    label="Company or organization"
                    optional
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Acme Inc."
                    autoComplete="organization"
                  />

                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label
                        htmlFor="message"
                        className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
                      >
                        How can I help?
                      </label>

                      <span className="text-[11px] text-slate-400 dark:text-slate-500">
                        Required
                      </span>
                    </div>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your project, current data challenges, desired outcome, or expected timeline."
                      className={[
                        "w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3",
                        "text-sm leading-relaxed text-slate-900 outline-none transition-all duration-200",
                        "placeholder:text-slate-400",
                        "hover:border-slate-300",
                        "focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500/20",
                        "dark:border-white/10 dark:bg-dark-700 dark:text-white",
                        "dark:placeholder:text-slate-600 dark:hover:border-white/20",
                        "dark:focus:border-teal-400 dark:focus:bg-dark-700 dark:focus:ring-teal-400/20",
                      ].join(" ")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus !== "idle"}
                    className={[
                      "relative w-full overflow-hidden rounded-md px-5 py-3.5",
                      "text-sm font-semibold transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500",
                      "focus-visible:ring-offset-2 dark:focus-visible:ring-teal-400",
                      "dark:focus-visible:ring-offset-dark-800",
                      submitStatus !== "idle"
                        ? "cursor-not-allowed bg-teal-500/70 text-white dark:bg-teal-400/70 dark:text-dark-900"
                        : "bg-teal-500 text-white hover:bg-teal-600 hover:shadow-[0_0_24px_rgba(20,184,166,0.28)] dark:bg-teal-400 dark:text-dark-900 dark:hover:bg-teal-500",
                    ].join(" ")}
                  >
                    {submitStatus === "idle" && (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Send size={15} />
                        Start the conversation
                      </span>
                    )}

                    {submitStatus === "submitting" && (
                      <>
                        <span className="inline-flex items-center justify-center gap-2">
                          <Loader2 size={15} className="animate-spin" />
                          Preparing your message...
                        </span>

                        <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left animate-[contact-progress_900ms_ease-in-out_forwards] bg-white/80 dark:bg-dark-900/70" />
                      </>
                    )}

                    {submitStatus === "success" && (
                      <span className="inline-flex items-center justify-center gap-2">
                        <Check size={15} />
                        Message ready
                      </span>
                    )}

                    {submitStatus === "error" && (
                      <span className="inline-flex items-center justify-center gap-2">
                        Review required fields
                      </span>
                    )}
                  </button>
                </div>

                <div className="mt-auto pt-6">

                          {submitStatus === "success" && (
                    <div
                      role="status"
                      className="rounded-md border border-teal-500/30 bg-teal-500/10 p-4 dark:border-teal-400/30 dark:bg-teal-400/10"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500 text-white dark:bg-teal-400 dark:text-dark-900">
                          <Check size={15} />
                        </span>

                        <div>
                          <p className="text-sm font-semibold text-teal-800 dark:text-teal-300">
                            Your inquiry is ready.
                          </p>

                          <p className="mt-1 text-sm leading-relaxed text-teal-700 dark:text-teal-400">
                            Your email application should open with the message prepared.
                            I will respond as soon as possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div
                      role="alert"
                      className="rounded-md border border-red-300 bg-red-50 p-4 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
                    >
                      Please provide your name, work email, and a short description of how
                      I can help.
                    </div>
                  )}

                  <div className="mt-6 border-t border-slate-100 pt-5 dark:border-white/5">
                    <div className="flex flex-col gap-2 text-xs text-slate-400 dark:text-slate-500 sm:flex-row sm:items-center sm:justify-between">
                      <span className="inline-flex items-center gap-1.5">
                        
                      </span>
                      
                      <span className="inline-flex items-center gap-1.5">
                        No mailing lists or automated marketing.
                      </span>
                      
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

type FormFieldProps = {
  label: string;
  optional?: boolean;
  id: string;
  name: keyof FormData;
  value: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const FormField: React.FC<FormFieldProps> = ({
  label,
  optional = false,
  id,
  name,
  value,
  placeholder,
  type = 'text',
  autoComplete,
  required = false,
  onChange,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label
          htmlFor={id}
          className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400"
        >
          {label}
        </label>

        <span className="text-[11px] text-slate-400 dark:text-slate-500">
          {optional ? 'Optional' : 'Required'}
        </span>
      </div>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={[
          'w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3',
          'text-sm text-slate-900 outline-none transition-all duration-200',
          'placeholder:text-slate-400',
          'hover:border-slate-300',
          'focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500/20',
          'dark:border-white/10 dark:bg-dark-700 dark:text-white',
          'dark:placeholder:text-slate-600 dark:hover:border-white/20',
          'dark:focus:border-teal-400 dark:focus:bg-dark-700 dark:focus:ring-teal-400/20',
        ].join(' ')}
      />
    </div>
  );
};

type InfoCardProps = {
  icon: React.ReactNode;
  label: string;
  title: string;
  description: string;
};

const InfoCard: React.FC<InfoCardProps> = ({
  icon,
  label,
  title,
  description,
}) => {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/5 dark:bg-dark-700">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {label}
        </span>

        {icon}
      </div>

      <p className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </p>

      <p className="mt-1.5 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
        {description}
      </p>
    </div>
  );
};

type ContactCardProps = {
  link: ContactLink;
};

const ContactCard: React.FC<ContactCardProps> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target={link.external ? '_blank' : undefined}
      rel={link.external ? 'noopener noreferrer' : undefined}
      className={[
        'group flex items-center gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4',
        'transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-500/40 hover:bg-white hover:shadow-lg hover:shadow-slate-900/5',
        'dark:border-white/5 dark:bg-dark-700 dark:hover:border-teal-400/40 dark:hover:bg-dark-700 dark:hover:shadow-black/20',
      ].join(' ')}
      aria-label={`${link.name}: ${link.description}`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border-slate-200 text-teal-500 transition-colors group-hover:border-teal-500/30 dark:text-teal-400 dark:group-hover:border-teal-400/30">
        <Icon size={17} />
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-400 dark:text-slate-500">
            {link.name}
          </span>

          <ArrowRight
            size={15}
            className="shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-teal-500 dark:text-slate-600 dark:group-hover:text-teal-400"
          />
        </div>

        <p className="mt-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">
          {link.value}
        </p>

        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          {link.description}
        </p>
      </div>
    </a>
  );
};

type FieldProps = {
  label: string;
  optional?: boolean;
  id: string;
  name: keyof FormData;
  value: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  autoComplete?: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const Field: React.FC<FieldProps> = ({
  label,
  optional = false,
  id,
  name,
  value,
  placeholder,
  type = 'text',
  autoComplete,
  required = false,
  onChange,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label
          htmlFor={id}
          className="text-xs font-semibold uppercase tracking-[0.17em] text-slate-500 dark:text-slate-400"
        >
          {label}
        </label>

        {optional && (
          <span className="text-[11px] text-slate-400 dark:text-slate-500">
            Optional
          </span>
        )}
      </div>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        required={required}
        className={[
          'w-full rounded-md border border-slate-200 bg-slate-50 px-4 py-3',
          'text-sm text-slate-900 outline-none transition-all',
          'placeholder:text-slate-400',
          'hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500/20',
          'dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder:text-slate-600',
          'dark:hover:border-white/20 dark:focus:border-teal-400 dark:focus:bg-dark-800 dark:focus:ring-teal-400/20',
        ].join(' ')}
      />
    </div>
  );
};

type TextAreaFieldProps = {
  label: string;
  id: string;
  name: keyof FormData;
  value: string;
  placeholder: string;
  required?: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  id,
  name,
  value,
  placeholder,
  required = false,
  onChange,
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-xs font-semibold uppercase tracking-[0.17em] text-slate-500 dark:text-slate-400"
      >
        {label}
      </label>

      <textarea
        id={id}
        name={name}
        rows={7}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={[
          'w-full resize-none rounded-md border border-slate-200 bg-slate-50 px-4 py-3',
          'text-sm leading-relaxed text-slate-900 outline-none transition-all',
          'placeholder:text-slate-400',
          'hover:border-slate-300 focus:border-teal-500 focus:bg-white focus:ring-1 focus:ring-teal-500/20',
          'dark:border-white/10 dark:bg-dark-800 dark:text-white dark:placeholder:text-slate-600',
          'dark:hover:border-white/20 dark:focus:border-teal-400 dark:focus:bg-dark-800 dark:focus:ring-teal-400/20',
        ].join(' ')}
      />
    </div>
  );
};

export default Contact;