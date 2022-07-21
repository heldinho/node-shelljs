const shell = require("shelljs");

const dir = process.argv.slice(2)[0];
const names = process.argv.slice(3);
const code = (name) => `import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ${name}(props) {
  return (
    <View>
      <Text>${name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
`;

shell.mkdir(dir);

for (let screen of names) {
  shell.echo(code(screen)).to(`${dir}/${screen}.js`);
}

console.log(process.argv.slice(2));

shell.exit(1);
