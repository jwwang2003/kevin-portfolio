import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useScrollListener from '../utils/hooks/useScrollListener'
import { useTranslation } from 'next-i18next'

function Nav (): JSX.Element {
  const { locale, asPath } = useRouter()
  const { t } = useTranslation('common')

  const routes: { name: string; href: string }[] = [
    {
      name: t('Home'),
      href: '/'
    },
    {
      name: t('Bio'),
      href: '/bio'
    },
    {

      name: t('Store'),
      href: '/store'
    }
  ]

  const [navClassList, setNavClassList] = useState<string[]>([])
  const scroll = useScrollListener()

  useEffect(() => {
    const _classList = []

    if (scroll.y > 125 && scroll.y - scroll.lastY > 0) { _classList.push('-translate-y-full') }

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  return (<nav id="nav" className={`${navClassList.join(' ')} z-10 sticky top-0 flex flex-col align-center lg:flex-row items-center backdrop-blur-sm py-2 px-8 transition-all duration-300 ease-in-out`}
    style={{ background: 'rgba(230,230,230,0.5)' }}
  >
    <span className="lg:mr-auto">
      <Image src="/Signature_KW.svg" width="100px" height="53px"/>
    </span>
    <div>
      {routes.map(({ name, href }) => <Link key={href} href={href} locale={locale} passHref>
        <a>{name}</a>
      </Link>)}
      <Link href={asPath} locale={locale === 'zh-CN' ? 'en-US' : 'zh-CN'}><a>{locale === 'zh-CN' ? t('EN') : t('CN')}</a></Link>
    </div>
  </nav>)
}

export default Nav
