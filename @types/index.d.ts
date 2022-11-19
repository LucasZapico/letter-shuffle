/**
 * TODO: take another pass looking for this type in next repo
 */
export type RouterType = {
  pathname?: string
  query?: object
  asPath?: string
  isFallback?: boolean
  basePath?: string
  locale?: string
  locales?: string[]
  defaultLocales?: string
  domainLocales?: array<{ domain; defaultLocale; locales }>
  isReady?: boolean
  isPreview?: boolean
}
