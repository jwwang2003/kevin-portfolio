import type { NextPage } from 'next'
import Skeleton from '../components/Skeleton'
import applyInternationalization from '../utils/applyInternationalization'

const Store: NextPage = () => {
  return (
    <Skeleton title="This is the home page" description="This is the description">
      <div className="flex flex-row justify-center flex-wrap gap-4 py-4 pt-4 pb-20">
        {/* {[...Array(25)].map((x, i) =>
          <Test />
        )} */}
      </div>
    </Skeleton>
  )
}

// function Test (): JSX.Element {
//   return (<div className="max-w-xs rounded overflow-hidden shadow-lg">
//     <img className="w-full" src="/images/test.png" alt="Sunset in the mountains" />
//     <div className="px-6 py-4">
//       <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
//       <p className="text-gray-700 text-base">
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
//       </p>
//     </div>
//     <div className="px-6 pt-4 pb-2">
//       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
//       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
//       <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
//     </div>
//   </div>)
// }

export async function getStaticProps ({ locale }:{ locale: string }) {
  return {
    props: {
      ...(await applyInternationalization({ locale: locale, namespaces: ['store'] }))
    }
  }
}

export default Store
