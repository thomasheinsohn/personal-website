import { GridPattern } from '@/components/GridPattern'

export default function Impressum() {
  return (
    <div className="relative flex h-screen flex-auto flex-col items-center justify-center">
      <div className="absolute inset-0 -z-10 text-slate-900/10 [mask-image:linear-gradient(transparent,white,transparent)]">
        <GridPattern x="50%" y="50%" patternTransform="translate(0 60)" />
      </div>
      <h1 className="font-display text-5xl font-extrabold text-slate-900 sm:text-5xl">
        Impressum
      </h1>
      <div className="space-y-5 text-center ">
        <p className="pt-4">Max Mustermann GmbH</p>
        <p>
          Handelsregister: Registergericht: Amtsgericht Beispielstadt
          Registernummer: HRB 12345
        </p>
        <p>Musterstraße 1, 12345 Beispielstadt, Deutschland</p>
        <p>
          Telefon: 01234 56789 Fax: 01234 56789-0 E-Mail:
          info[at]beispiel-website.de
        </p>
      </div>
    </div>
  )
}
