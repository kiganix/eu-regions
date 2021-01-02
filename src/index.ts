export type Iso3166_1_Code = string
export type Iso3166_2_Code = string

export type EuOutermostRegionCode = Iso3166_1_Code & ('MF' | 'GF' | 'GP' | 'MQ' | 'YT' | 'RE' | 'BL')
export const EuOutermostRegionCodes: readonly EuOutermostRegionCode[] = [
  'MF', 'GF', 'GP', 'MQ', 'YT', 'RE', 'BL',
]

export type EuCountryCode = Iso3166_1_Code & (
  'IE' | 'IT' | 'EE' | 'AT' |
  'NL' | 'CY' | 'GR' | 'HR' |
  'SE' | 'AX' |
  'ES' | 'SK' | 'SI' |
  'CZ' | 'DK' | 'DE' | 'HU' |
  'FI' | 'FR' | 'BG' | 'BE' |
  'PL' | 'PT' | 'MT' | 'LV' |
  'LT' | 'RO' | 'LU')

export const EuCountryCodes: readonly EuCountryCode[] = [
  'IE', 'IT', 'EE' , 'AT',
  'NL' , 'CY' , 'GR' , 'HR',
  'SE' , 'ES' , 'SK' , 'SI',
  'CZ' , 'DK' , 'DE' , 'HU',
  'FI' , 'FR' , 'BG' , 'BE',
  'PL' , 'PT' , 'MT' , 'LV',
  'LT' , 'RO' , 'LU',
]

export type EuRegionCode = Iso3166_1_Code & (EuCountryCode | EuOutermostRegionCode)
export const EuRegionCodes: readonly EuRegionCode[] = [...EuOutermostRegionCodes, ...EuCountryCodes]

export type EftaCountryCode = Iso3166_1_Code & (EuCountryCode | 'IS' | 'LI' | 'NO')
export const EftaOnlyCountyCodes: readonly EftaCountryCode[] = ['IS', 'LI', 'NO']

export const EftaCountryCodes: readonly EftaCountryCode[] = [...EftaOnlyCountyCodes, ...EuCountryCodes]
export type EftaRegionCode = Iso3166_1_Code & (EftaCountryCode | EuRegionCode)
export const EftaRegionCodes: readonly EftaRegionCode[] = [...EftaOnlyCountyCodes, ...EuRegionCodes]

export type PortugalOutermostRegionCode = Iso3166_2_Code & ('PT-20' | 'PT-30')
export const PortugalOutermostRegionCodes: readonly PortugalOutermostRegionCode[] = [
  'PT-20', 'PT-30',
]

export type SpainOutermostRegionCode = Iso3166_2_Code & ('ES-CN')
export const SpainOutermostRegionCodes: readonly SpainOutermostRegionCode[] = [
  'ES-CN',
]

export type FrenchOctaCountryCode = Iso3166_1_Code & ('PM' | 'WF' | 'BL' | 'PF' | 'TF' | 'NC')
export const FrenchOctaCountryCodes: readonly FrenchOctaCountryCode[] = [
  'PM', 'WF', 'BL', 'PF', 'TF', 'NC', 
]

export type ExcludedRegionCode = Iso3166_1_Code & ('GL' | 'FO')
export const ExcludedRegionCodes: readonly ExcludedRegionCode[] = [
  'GL', 'FO',
]

export type EulAppliedRegionCode = EftaRegionCode | PortugalOutermostRegionCode | SpainOutermostRegionCode | FrenchOctaCountryCode
export const EulAppliedRegionCodes: readonly EulAppliedRegionCode[] = [
  ...EftaRegionCodes,
  ...PortugalOutermostRegionCodes,
  ...SpainOutermostRegionCodes,
  ...FrenchOctaCountryCodes,
]

export type DutchOctaCountryCode = Iso3166_1_Code & ('AW' | 'CW' | 'SX' | 'BQ')
export const DutchOctaCountryCodes: readonly DutchOctaCountryCode[] = [
  'AW', 'CW', 'SX', 'BQ',
]

export type EuCitizenshipRegionCode = EulAppliedRegionCode | ExcludedRegionCode | DutchOctaCountryCode
export const EuCitizenshipRegionCodes: readonly EuCitizenshipRegionCode[] = [
  ...EulAppliedRegionCodes,
  ...ExcludedRegionCodes,
  ...DutchOctaCountryCodes,
]

export type ExitedRegionCode = Iso3166_1_Code & ('UK' | 'GB' | 'BM' | 'IO' | 'VG' | 'KY' | 'FK' | 'GI' | 'MS' | 'PN' | 'SH' | 'TC' | 'GG' | 'JE' | 'IM')
export const ExitedRegionCodes: readonly ExitedRegionCode[] = [
  'UK', 'GB', 'BM', 'IO', 
  'VG', 'KY', 'FK', 'GI', 
  'MS', 'PN', 'SH', 'TC',
  'GG', 'JE', 'IM',
]
