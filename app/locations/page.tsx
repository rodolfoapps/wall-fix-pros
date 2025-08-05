import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Areas - Wall Fix Pros | Maryland, Virginia, West Virginia, Pennsylvania',
  description: 'Wall Fix Pros serves 33 cities across Maryland, Virginia, West Virginia, and Pennsylvania. Find drywall repair services in your area.',
}

export default function LocationsPage() {
  const states = [
    {
      name: 'Maryland',
      cities: ['Frederick', 'Baltimore', 'Ellicot City', 'Columbia', 'Gaithersburg', 'Potomac', 'Kensington', 'Bethesda', 'Rockville', 'Middletown', 'Mt Airy', 'Hagerstown', 'Darnestown', 'North Potomac', 'Germantown', 'Olney', 'Laytonsville']
    },
    {
      name: 'Virginia',
      cities: ['Leesburg', 'Sterling', 'Chantilly', 'Fairfax', 'Mclean', 'Alexandria', 'Reston', 'Herndon', 'Ashburn', 'Arlington', 'Falls Church']
    },
    {
      name: 'West Virginia',
      cities: ['Harpers Ferry', 'Charles Town']
    },
    {
      name: 'Pennsylvania',
      cities: ['Green Castle', 'Chambersburg', 'Gettysburg']
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-brand-blue-700">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-brand-blue-700 opacity-75" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Service Areas
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-brand-blue-100">
            Wall Fix Pros provides professional drywall repair services across 33 cities in Maryland, Virginia, West Virginia, and Pennsylvania.
          </p>
        </div>
      </div>

      {/* Service Areas */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            We Serve 33 Cities Across 4 States
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Headquartered in Frederick, MD, we provide fast, reliable drywall repair services throughout the region.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {states.map((state) => (
            <div key={state.name} className="rounded-lg border border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-brand-blue-700 mb-6">
                {state.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {state.cities.map((city) => (
                  <div key={city} className="flex items-center">
                    <div className="h-2 w-2 rounded-full bg-brand-orange-500 mr-3" />
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-lg bg-brand-blue-50 px-6 py-12 text-center">
          <h3 className="text-2xl font-bold text-brand-blue-900">
            Don't See Your City Listed?
          </h3>
          <p className="mt-4 text-lg text-brand-blue-700">
            We may still serve your area. Contact us to check availability.
          </p>
          <div className="mt-8">
            <a
              href="tel:+13015550199"
              className="inline-flex items-center rounded-md border border-transparent bg-brand-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-brand-orange-600"
            >
              Call (301) 555-0199
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}