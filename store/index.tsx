import { useState } from 'react'

/**
 * Language
 */
export type Language = 'null' | 'non-sense' | 'english' | 'french'

export const useLanguage = (initial: Language) =>
  useState<Language>(initial)
export type UseLanguageType = ReturnType<typeof useLanguage>
export type LanguageType = UseLanguageType[0]
export type SetLanguageType = UseLanguageType[1]

/**
 * word
 */
export type Word = string

export const useWord = (initial: Word) => useState<Word>(initial)
export type UseWordType = ReturnType<typeof useWord>
export type WordType = UseWordType[0]
export type SetWordType = UseWordType[1]

/**
 * results
 */
export type Results = string

export const useResults = (initial: Results[]) =>
  useState<Results[]>(initial)
export type UseResultsType = ReturnType<typeof useResults>
export type ResultsType = UseResultsType[0]
export type SetResultsType = UseResultsType[1]

/**
 * Count
 */
export type Count = number

export const useCount = (initial: Count) => useState<Count>(initial)
export type UseCountType = ReturnType<typeof useCount>
export type CountType = UseCountType[0]
export type SetCountType = UseCountType[1]
