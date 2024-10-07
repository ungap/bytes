async function bytes() {
  return new Uint8Array(await this.arrayBuffer());
}

for (const C of ['Blob', 'Request', 'Response']) {
  const p = globalThis[C]?.prototype;
  if (p && !p.bytes) p.bytes = bytes;
}
