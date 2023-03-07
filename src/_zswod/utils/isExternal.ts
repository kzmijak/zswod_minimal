const linkProtocoles = ['http', 'https'] as const;

const isExternal = (link: string) => linkProtocoles.find((protocole) => link.includes(protocole));

export { isExternal };
