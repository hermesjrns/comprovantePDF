export const CnpjMask = (value: string) => {
  //Mask for CNPJ INPUT VALUES
    return value
      .replace(/\D/, '')
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18);
  };

export const ContactMask = (value: string) => {
  //Mask for CONTACT INPUT VALUES
  return value
    .replace(/\D/, '')
    .replace(/^(\d{2})(\d)/, '($1) $2')
    .replace(/\s(\d{4})(\d)/, ' $1-$2')
    .replace(/^\((\d{2})\)\s(\d)(\d)(\d)(\d)\-(\d)(\d)(\d)(\d)(\d)/, '($1) $2 $3$4$5$6-$7$8$9$10')
    .slice(0,16)
      // .slice(0, 18);
}

export const CurrencyMask = (value: string) => {
  const valorNumber = Number(value).valueOf()
  const valor = valorNumber.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  return valor
}