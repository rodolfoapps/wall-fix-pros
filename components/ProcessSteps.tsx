const defaultSteps = [
  { title: 'Tell us what happened', text: 'Call or send a photo of the damage. We give you a straight answer on scope and cost.' },
  { title: 'Free on-site estimate', text: 'We confirm the price in writing before any work starts. No surprises.' },
  { title: 'Repair done right', text: 'Patched, taped, textured and primed to match the rest of the wall.' },
  { title: 'Clean-up and walkthrough', text: 'We leave the room the way we found it, minus the hole.' },
]

interface Props {
  steps?: { title: string; text?: string }[]
  heading?: string
  intro?: string
  dark?: boolean
}

export default function ProcessSteps({ steps = defaultSteps, heading = 'How it works', intro, dark = false }: Props) {
  return (
    <section className={dark ? 'bg-ink-900 text-white' : 'bg-white'}>
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <p className="eyebrow">Simple process</p>
        <h2 className={`mt-2 section-title ${dark ? 'text-white' : ''}`}>{heading}</h2>
        {intro && <p className={`mt-4 max-w-2xl text-lg ${dark ? 'text-ink-200' : 'text-ink-600'}`}>{intro}</p>}
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <span className="font-heading text-5xl font-extrabold text-brand-500">{String(i + 1).padStart(2, '0')}</span>
              <h3 className={`mt-3 text-xl font-bold ${dark ? 'text-white' : 'text-ink-900'}`}>{step.title}</h3>
              {step.text && <p className={`mt-2 ${dark ? 'text-ink-300' : 'text-ink-600'}`}>{step.text}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
