import type { Metadata } from 'next'
import Link from 'next/link'
import { CalendarIcon, ClockIcon, UserIcon, StarIcon, CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Before & After: Amazing Drywall Transformations in Bethesda and Rockville',
  description: 'See incredible before and after drywall transformations from Wall Fix Pros projects in Bethesda and Rockville. Real case studies with photos and detailed results.',
}

export default function BethesdaRockvilleTransformationsPage() {
  return (
    <div className="bg-white">
      {/* Article Header */}
      <div className="relative bg-purple-700">
        <div className="absolute inset-0 bg-purple-700 opacity-75" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
              Case Studies
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Before & After: Amazing Drywall Transformations in Bethesda and Rockville
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-purple-100">
              Discover incredible drywall transformations from our recent projects in Bethesda and Rockville. See how professional repair and installation can completely transform your space.
            </p>
            <div className="mt-8 flex items-center justify-center space-x-6 text-purple-100">
              <div className="flex items-center">
                <UserIcon className="h-5 w-5 mr-2" />
                <span>Wall Fix Pros Team</span>
              </div>
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span>December 8, 2024</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span>12 min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Nothing showcases the power of professional drywall work like dramatic before and after transformations. These real projects from our <Link href="/locations/maryland/bethesda" className="text-blue-600 hover:text-blue-700">Bethesda</Link> and <Link href="/locations/maryland/rockville" className="text-blue-600 hover:text-blue-700">Rockville</Link> service areas demonstrate how expert <Link href="/services/drywall-repair" className="text-blue-600 hover:text-blue-700">drywall repair</Link> and installation can completely transform your living space.
          </p>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformation #1: Bethesda Historic Home Water Damage Recovery</h2>
          
          <div className="border border-gray-200 rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Location:</strong> Historic District, <Link href="/locations/maryland/bethesda" className="text-blue-600 hover:text-blue-700">Bethesda, MD</Link></li>
                  <li><strong>Project Type:</strong> <Link href="/services/water-damage-repair" className="text-blue-600 hover:text-blue-700">Water Damage Restoration</Link></li>
                  <li><strong>Timeline:</strong> 10 days</li>
                  <li><strong>Size:</strong> 850 sq ft (3 rooms)</li>
                  <li><strong>Challenge:</strong> Preserve historic character</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A burst pipe during winter caused extensive water damage to the main floor of this 1920s Bethesda home. Water had saturated drywall in the living room, dining room, and hallway, causing significant swelling, staining, and beginning stages of mold growth. The homeowner was particularly concerned about maintaining the historic character while ensuring modern safety standards.
                </p>
              </div>
            </div>
            
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
              <h4 className="font-semibold text-red-800 mb-2">Before: The Damage</h4>
              <ul className="text-red-700 text-sm space-y-1">
                <li>• 4-foot high water staining on all affected walls</li>
                <li>• Significant drywall swelling and crumbling</li>
                <li>• Visible mold beginning in corners</li>
                <li>• Damaged baseboards and trim</li>
                <li>• Compromised insulation behind walls</li>
                <li>• Strong musty odors throughout affected areas</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">After: The Transformation</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Complete drywall replacement with moisture-resistant materials</li>
                <li>• Mold remediation and prevention treatment</li>
                <li>• Historic-appropriate texture matching</li>
                <li>• New insulation with vapor barriers</li>
                <li>• Period-correct trim and baseboards restored</li>
                <li>• Fresh, clean air quality restored</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-start">
                <StarIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-blue-800 font-medium mb-1">Customer Review:</p>
                  <p className="text-blue-700 text-sm italic">"Wall Fix Pros saved our historic home. They understood the importance of maintaining the original character while using modern techniques. The transformation is remarkable - you'd never know there was ever any damage. The attention to detail in matching the original textures was exceptional."</p>
                  <p className="text-blue-600 text-sm mt-2">- Sarah M., Bethesda Homeowner</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformation #2: Rockville Basement Finishing Masterpiece</h2>
          
          <div className="border border-gray-200 rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Location:</strong> <Link href="/locations/maryland/rockville" className="text-blue-600 hover:text-blue-700">Rockville, MD</Link></li>
                  <li><strong>Project Type:</strong> <Link href="/services/drywall-installation" className="text-blue-600 hover:text-blue-700">Complete Basement Finishing</Link></li>
                  <li><strong>Timeline:</strong> 3 weeks</li>
                  <li><strong>Size:</strong> 1,200 sq ft basement</li>
                  <li><strong>Features:</strong> Media room, office, full bath</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Vision</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This Rockville family wanted to transform their unfinished basement into a modern entertainment and work space. The challenge was creating a sophisticated, comfortable environment while addressing moisture concerns typical in below-grade spaces. The goal was a seamless, professional finish that would rival any above-grade room.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-50 border-l-4 border-gray-400 p-4 mb-6">
              <h4 className="font-semibold text-gray-800 mb-2">Before: Unfinished Potential</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Exposed concrete walls and ceiling joists</li>
                <li>• Minimal lighting and electrical</li>
                <li>• Concrete slab flooring</li>
                <li>• Storage and mechanical equipment visible</li>
                <li>• No climate control in finished areas</li>
                <li>• Moisture concerns requiring professional assessment</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">After: Luxury Living Space</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Professional framing and <Link href="/services/drywall-installation" className="text-green-600 underline">drywall installation</Link></li>
                <li>• Moisture-resistant materials throughout</li>
                <li>• Recessed lighting and electrical upgrades</li>
                <li>• <Link href="/services/ceiling-services" className="text-green-600 underline">Drop ceiling</Link> in mechanical areas</li>
                <li>• Climate-controlled comfort</li>
                <li>• Professional paint and finishing</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="flex items-start">
                <StarIcon className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-purple-800 font-medium mb-1">Customer Review:</p>
                  <p className="text-purple-700 text-sm italic">"We can't believe this is the same basement! Wall Fix Pros transformed our dark, damp basement into the most popular room in our house. The drywall work is flawless - smooth walls, perfect corners, and beautiful finishes. Our family spends most evenings down here now."</p>
                  <p className="text-purple-600 text-sm mt-2">- Michael and Jennifer K., Rockville</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformation #3: Bethesda Kitchen Renovation Integration</h2>
          
          <div className="border border-gray-200 rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Location:</strong> Luxury Home, <Link href="/locations/maryland/bethesda" className="text-blue-600 hover:text-blue-700">Bethesda, MD</Link></li>
                  <li><strong>Project Type:</strong> Kitchen Wall Modification</li>
                  <li><strong>Timeline:</strong> 5 days</li>
                  <li><strong>Size:</strong> 300 sq ft affected area</li>
                  <li><strong>Specialty:</strong> Load-bearing wall modification</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  During a high-end kitchen renovation, this Bethesda homeowner needed to modify a load-bearing wall to create an open concept layout. The challenge was integrating new drywall seamlessly with existing walls while working around structural modifications and maintaining the home's luxury finish standards.
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
              <h4 className="font-semibold text-orange-800 mb-2">Before: Compartmentalized Layout</h4>
              <ul className="text-orange-700 text-sm space-y-1">
                <li>• Closed-off kitchen with limited sight lines</li>
                <li>• Load-bearing wall creating cramped feeling</li>
                <li>• Multiple wall textures and ages</li>
                <li>• Uneven surfaces from previous modifications</li>
                <li>• Electrical and plumbing access required</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">After: Seamless Open Concept</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Structural beam properly enclosed and finished</li>
                <li>• Seamless integration of new and existing drywall</li>
                <li>• Uniform texture and finish throughout</li>
                <li>• Concealed access panels for utilities</li>
                <li>• Perfect preparation for luxury finishes</li>
              </ul>
            </div>
            
            <div className="bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-start">
                <StarIcon className="h-5 w-5 text-indigo-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-indigo-800 font-medium mb-1">Customer Review:</p>
                  <p className="text-indigo-700 text-sm italic">"Wall Fix Pros was the perfect partner for our kitchen renovation. They coordinated flawlessly with our contractor and delivered perfect results. You absolutely cannot tell where the old wall ended and new work began. Their attention to detail matches the luxury standards we demanded."</p>
                  <p className="text-indigo-600 text-sm mt-2">- David L., Bethesda Homeowner</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Transformation #4: Rockville Whole-Home Texture Upgrade</h2>
          
          <div className="border border-gray-200 rounded-lg p-6 mb-12">
            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Project Overview</h3>
                <ul className="text-gray-600 space-y-2">
                  <li><strong>Location:</strong> <Link href="/locations/maryland/rockville" className="text-blue-600 hover:text-blue-700">Rockville, MD</Link></li>
                  <li><strong>Project Type:</strong> <Link href="/services/drywall-texturing" className="text-blue-600 hover:text-blue-700">Whole-Home Texture Removal</Link></li>
                  <li><strong>Timeline:</strong> 2 weeks</li>
                  <li><strong>Size:</strong> 2,400 sq ft (entire home)</li>
                  <li><strong>Challenge:</strong> Popcorn ceiling removal</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The Motivation</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  This Rockville family purchased a 1980s home with outdated popcorn ceilings and heavy wall textures throughout. They wanted to modernize the entire interior with smooth, contemporary finishes that would make their home feel fresh and current. The project required careful planning to minimize disruption to daily life.
                </p>
              </div>
            </div>
            
            <div className="bg-brown-50 border-l-4 border-yellow-600 p-4 mb-6">
              <h4 className="font-semibold text-yellow-800 mb-2">Before: Dated 1980s Textures</h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• Heavy popcorn ceilings throughout entire home</li>
                <li>• Rough, dated wall textures</li>
                <li>• Uneven surfaces from previous repairs</li>
                <li>• Dust-collecting ceiling treatments</li>
                <li>• Dark, outdated appearance</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
              <h4 className="font-semibold text-green-800 mb-2">After: Modern Smooth Finishes</h4>
              <ul className="text-green-700 text-sm space-y-1">
                <li>• Complete popcorn ceiling removal and refinishing</li>
                <li>• Smooth, contemporary wall surfaces</li>
                <li>• Perfect preparation for modern paint finishes</li>
                <li>• Improved lighting reflection and room brightness</li>
                <li>• Easy-to-clean, maintenance-free surfaces</li>
              </ul>
            </div>
            
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="flex items-start">
                <StarIcon className="h-5 w-5 text-teal-600 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-teal-800 font-medium mb-1">Customer Review:</p>
                  <p className="text-teal-700 text-sm italic">"The transformation is incredible! Our 1980s home now looks like it was built yesterday. Wall Fix Pros managed the entire project with minimal disruption - we stayed in the house the whole time. The smooth ceilings and walls make such a difference in how light and modern everything feels."</p>
                  <p className="text-teal-600 text-sm mt-2">- Lisa and Robert T., Rockville</p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">What Makes These Transformations Possible</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            These dramatic transformations showcase the expertise and attention to detail that Wall Fix Pros brings to every project in Bethesda and Rockville. Here's what makes the difference:
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Advanced moisture assessment and prevention techniques</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Precision texture matching and seamless integration</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Structural coordination and load-bearing modifications</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Professional-grade materials and tools</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Experience</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Detailed project planning and timeline management</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Minimal disruption to daily life</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Clean, professional work environment</span>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-600 text-sm">Comprehensive warranty and follow-up service</span>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Transformation Awaits</h2>
          
          <p className="text-lg text-gray-600 mb-8">
            These are just a few examples of the transformations possible with professional drywall services. Whether you're dealing with damage, planning a renovation, or simply want to update your home's look, Wall Fix Pros has the expertise to exceed your expectations.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Common Transformation Projects:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="text-gray-600 space-y-2">
                  <li>• <Link href="/services/water-damage-repair" className="text-blue-600 hover:text-blue-700">Water damage restoration</Link></li>
                  <li>• <Link href="/services/drywall-installation" className="text-blue-600 hover:text-blue-700">Basement finishing</Link></li>
                  <li>• Kitchen and bathroom renovations</li>
                  <li>• <Link href="/services/drywall-texturing" className="text-blue-600 hover:text-blue-700">Texture removal and updates</Link></li>
                </ul>
              </div>
              <div>
                <ul className="text-gray-600 space-y-2">
                  <li>• Room additions and modifications</li>
                  <li>• <Link href="/services/ceiling-services" className="text-blue-600 hover:text-blue-700">Ceiling repairs and updates</Link></li>
                  <li>• Historic home preservation</li>
                  <li>• Whole-home modernization</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-purple-700 text-white rounded-lg p-8 mt-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Ready for Your Own Transformation?</h2>
              <p className="text-purple-100 mb-6">
                Join hundreds of satisfied homeowners in Bethesda, Rockville, and throughout Maryland who have experienced the Wall Fix Pros difference. Let us transform your space with professional expertise and unmatched attention to detail.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200">200+</div>
                  <div className="text-purple-100 text-sm">Transformations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200">5 Year</div>
                  <div className="text-purple-100 text-sm">Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200">98%</div>
                  <div className="text-purple-100 text-sm">Satisfaction</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                >
                  Get Free Estimate
                </Link>
                <a
                  href="tel:+12406701949"
                  className="border-2 border-purple-300 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-200"
                >
                  Call (240) 670-1949
                </a>
              </div>
              <p className="text-purple-200 text-sm mt-4">
                Serving Bethesda, Rockville, and all of Montgomery County
              </p>
            </div>
          </div>

          {/* Related Articles */}
          <section className="mb-16 mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link href="/blog/fix-common-drywall-problems-maryland-homes" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Common Drywall Problems Maryland</h3>
                <p className="text-gray-600 text-sm">Learn to identify and fix the most common drywall issues in Maryland homes.</p>
              </Link>
              <Link href="/blog/water-damage-repair-frederick" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Water Damage Repair Guide</h3>
                <p className="text-gray-600 text-sm">Essential information for homeowners dealing with water damage emergencies.</p>
              </Link>
              <Link href="/blog/basement-drywall-installation-columbia-maryland" className="block bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Basement Installation Case Study</h3>
                <p className="text-gray-600 text-sm">Detailed case study of complete basement drywall installation in Columbia, MD.</p>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}