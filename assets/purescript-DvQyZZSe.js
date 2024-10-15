const e=Object.freeze(JSON.parse(`{"displayName":"PureScript","fileTypes":["purs"],"name":"purescript","patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.purescript"},"2":{"name":"punctuation.definition.entity.purescript"}},"match":"(\`)(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(\`)","name":"keyword.operator.function.infix.purescript"},{"begin":"^\\\\s*\\\\b(module)(?!')\\\\b","beginCaptures":{"1":{"name":"keyword.other.purescript"}},"end":"(where)","endCaptures":{"1":{"name":"keyword.other.purescript"}},"name":"meta.declaration.module.purescript","patterns":[{"include":"#comments"},{"include":"#module_name"},{"include":"#module_exports"},{"match":"[a-z]+","name":"invalid.purescript"}]},{"begin":"^\\\\s*\\\\b(class)(?!')\\\\b","beginCaptures":{"1":{"name":"storage.type.class.purescript"}},"end":"\\\\b(where)\\\\b|$","endCaptures":{"1":{"name":"keyword.other.purescript"}},"name":"meta.declaration.typeclass.purescript","patterns":[{"include":"#type_signature"}]},{"begin":"^\\\\s*\\\\b(else\\\\s+)?(derive\\\\s+)?(newtype\\\\s+)?(instance)(?!')\\\\b","beginCaptures":{"1":{"name":"keyword.other.purescript"},"2":{"name":"keyword.other.purescript"},"3":{"name":"keyword.other.purescript"},"4":{"name":"keyword.other.purescript"}},"contentName":"meta.type-signature.purescript","end":"\\\\b(where)\\\\b|$","endCaptures":{"1":{"name":"keyword.other.purescript"}},"name":"meta.declaration.instance.purescript","patterns":[{"include":"#type_signature"}]},{"begin":"^(\\\\s*)(foreign)\\\\s+(import)\\\\s+(data)\\\\s+([\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)","beginCaptures":{"2":{"name":"keyword.other.purescript"},"3":{"name":"keyword.other.purescript"},"4":{"name":"keyword.other.purescript"},"5":{"name":"entity.name.type.purescript"},"6":{"name":"keyword.other.double-colon.purescript"}},"contentName":"meta.kind-signature.purescript","end":"^(?!\\\\1[ \\\\t]|[ \\\\t]*$)","name":"meta.foreign.data.purescript","patterns":[{"include":"#double_colon"},{"include":"#kind_signature"}]},{"begin":"^(\\\\s*)(foreign)\\\\s+(import)\\\\s+([\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)","beginCaptures":{"2":{"name":"keyword.other.purescript"},"3":{"name":"keyword.other.purescript"},"4":{"name":"entity.name.function.purescript"}},"contentName":"meta.type-signature.purescript","end":"^(?!\\\\1[ \\\\t]|[ \\\\t]*$)","name":"meta.foreign.purescript","patterns":[{"include":"#double_colon"},{"include":"#type_signature"}]},{"begin":"^\\\\s*\\\\b(import)(?!')\\\\b","beginCaptures":{"1":{"name":"keyword.other.purescript"}},"end":"($|(?=--))","name":"meta.import.purescript","patterns":[{"include":"#module_name"},{"include":"#module_exports"},{"captures":{"1":{"name":"keyword.other.purescript"}},"match":"\\\\b(as|hiding)\\\\b"}]},{"begin":"^(\\\\s)*(data|newtype)\\\\s+(.+?)\\\\s*(?==|$)","beginCaptures":{"2":{"name":"storage.type.data.purescript"},"3":{"name":"meta.type-signature.purescript","patterns":[{"include":"#type_signature"}]}},"end":"^(?!\\\\1[ \\\\t]|[ \\\\t]*$)","name":"meta.declaration.type.data.purescript","patterns":[{"include":"#comments"},{"captures":{"0":{"name":"keyword.operator.assignment.purescript"}},"match":"="},{"captures":{"1":{"patterns":[{"include":"#data_ctor"}]},"2":{"name":"meta.type-signature.purescript","patterns":[{"include":"#type_signature"}]}},"match":"(?:(?:\\\\b([\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*)\\\\s+)(?:(?<ctorArgs>(?:(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*|(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*|(?:(?:[\\\\w()'→⇒\\\\[\\\\],]|->|=>)+\\\\s*)+))(?:\\\\s*(?:\\\\s+)\\\\s*\\\\g<ctorArgs>)?)?))"},{"captures":{"0":{"name":"punctuation.separator.pipe.purescript"}},"match":"\\\\|"},{"include":"#record_types"}]},{"begin":"^(\\\\s)*(type)\\\\s+(.+?)\\\\s*(?==|$)","beginCaptures":{"2":{"name":"storage.type.data.purescript"},"3":{"name":"meta.type-signature.purescript","patterns":[{"include":"#type_signature"}]}},"contentName":"meta.type-signature.purescript","end":"^(?!\\\\1[ \\\\t]|[ \\\\t]*$)","name":"meta.declaration.type.type.purescript","patterns":[{"captures":{"0":{"name":"keyword.operator.assignment.purescript"}},"match":"="},{"include":"#type_signature"},{"include":"#record_types"},{"include":"#comments"}]},{"match":"^\\\\s*\\\\b(derive|where|data|type|newtype|infix[lr]?|foreign(\\\\s+import)?(\\\\s+data)?)(?!')\\\\b","name":"keyword.other.purescript"},{"match":"\\\\?(?:[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*|[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)","name":"entity.name.function.typed-hole.purescript"},{"match":"^\\\\s*\\\\b(data|type|newtype)(?!')\\\\b","name":"storage.type.purescript"},{"match":"\\\\b(do|ado|if|then|else|case|of|let|in)(?!('|\\\\s*(:|=)))\\\\b","name":"keyword.control.purescript"},{"match":"\\\\b(?<!\\\\$)0(x|X)[0-9a-fA-F]+\\\\b(?!\\\\$)","name":"constant.numeric.hex.purescript"},{"captures":{"0":{"name":"constant.numeric.decimal.purescript"},"1":{"name":"meta.delimiter.decimal.period.purescript"},"2":{"name":"meta.delimiter.decimal.period.purescript"},"3":{"name":"meta.delimiter.decimal.period.purescript"},"4":{"name":"meta.delimiter.decimal.period.purescript"},"5":{"name":"meta.delimiter.decimal.period.purescript"},"6":{"name":"meta.delimiter.decimal.period.purescript"}},"match":"(?<!\\\\$)(?:(?:\\\\b\\\\d+(\\\\.)\\\\d+[eE][+-]?\\\\d+\\\\b)|(?:\\\\b\\\\d+[eE][+-]?\\\\d+\\\\b)|(?:\\\\b\\\\d+(\\\\.)\\\\d+\\\\b)|(?:\\\\b\\\\d+\\\\b(?!\\\\.)))(?!\\\\$)","name":"constant.numeric.decimal.purescript"},{"match":"\\\\b(true|false)\\\\b","name":"constant.language.boolean.purescript"},{"match":"\\\\b((\\\\d+_?)*\\\\d+|0([xX][0-9a-fA-F]+|[oO][0-7]+))\\\\b","name":"constant.numeric.purescript"},{"begin":"\\"\\"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.purescript"}},"end":"\\"\\"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.purescript"}},"name":"string.quoted.triple.purescript"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.purescript"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.purescript"}},"name":"string.quoted.double.purescript","patterns":[{"include":"#characters"},{"begin":"\\\\\\\\\\\\s","beginCaptures":{"0":{"name":"markup.other.escape.newline.begin.purescript"}},"end":"\\\\\\\\","endCaptures":{"0":{"name":"markup.other.escape.newline.end.purescript"}},"patterns":[{"match":"\\\\S+","name":"invalid.illegal.character-not-allowed-here.purescript"}]}]},{"match":"\\\\\\\\$","name":"markup.other.escape.newline.purescript"},{"captures":{"1":{"name":"punctuation.definition.string.begin.purescript"},"2":{"patterns":[{"include":"#characters"}]},"7":{"name":"punctuation.definition.string.end.purescript"}},"match":"(')((?:[ -\\\\[\\\\]-~]|(\\\\\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\\\\\\\\"'\\\\&]))|(\\\\\\\\o[0-7]+)|(\\\\\\\\x[0-9A-Fa-f]+)|(\\\\^[A-Z@\\\\[\\\\]\\\\\\\\\\\\^_])))(')","name":"string.quoted.single.purescript"},{"include":"#function_type_declaration"},{"captures":{"1":{"patterns":[{"include":"$self"}]},"2":{"name":"keyword.other.double-colon.purescript"},"3":{"name":"meta.type-signature.purescript","patterns":[{"include":"#type_signature"}]}},"match":"\\\\((?<paren>(?:[^()]|\\\\(\\\\g<paren>\\\\))*)(::|∷)(?<paren2>(?:[^()]|\\\\(\\\\g<paren2>\\\\))*)\\\\)"},{"begin":"^(\\\\s*)(?:(::|∷))","beginCaptures":{"2":{"name":"keyword.other.double-colon.purescript"}},"end":"^(?!\\\\1[ \\\\t]*|[ \\\\t]*$)","patterns":[{"include":"#type_signature"}]},{"include":"#data_ctor"},{"include":"#comments"},{"include":"#infix_op"},{"match":"<-|->","name":"keyword.other.arrow.purescript"},{"match":"[\\\\p{S}\\\\p{P}&&[^(),;\\\\[\\\\]\`{}_\\"']]+","name":"keyword.operator.purescript"},{"match":",","name":"punctuation.separator.comma.purescript"}],"repository":{"block_comment":{"patterns":[{"applyEndPatternLast":1,"begin":"\\\\{-\\\\s*\\\\|","beginCaptures":{"0":{"name":"punctuation.definition.comment.documentation.purescript"}},"end":"-\\\\}","endCaptures":{"0":{"name":"punctuation.definition.comment.documentation.purescript"}},"name":"comment.block.documentation.purescript","patterns":[{"include":"#block_comment"}]},{"applyEndPatternLast":1,"begin":"\\\\{-","beginCaptures":{"0":{"name":"punctuation.definition.comment.purescript"}},"end":"-\\\\}","name":"comment.block.purescript","patterns":[{"include":"#block_comment"}]}]},"characters":{"patterns":[{"captures":{"1":{"name":"constant.character.escape.purescript"},"2":{"name":"constant.character.escape.octal.purescript"},"3":{"name":"constant.character.escape.hexadecimal.purescript"},"4":{"name":"constant.character.escape.control.purescript"}},"match":"(?:[ -\\\\[\\\\]-~]|(\\\\\\\\(?:NUL|SOH|STX|ETX|EOT|ENQ|ACK|BEL|BS|HT|LF|VT|FF|CR|SO|SI|DLE|DC1|DC2|DC3|DC4|NAK|SYN|ETB|CAN|EM|SUB|ESC|FS|GS|RS|US|SP|DEL|[abfnrtv\\\\\\\\\\\\\\"'\\\\&]))|(\\\\\\\\o[0-7]+)|(\\\\\\\\x[0-9A-Fa-f]+)|(\\\\^[A-Z@\\\\[\\\\]\\\\\\\\\\\\^_]))"}]},"class_constraint":{"patterns":[{"captures":{"1":{"patterns":[{"match":"\\\\b[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*","name":"entity.name.type.purescript"}]},"2":{"patterns":[{"include":"#type_name"},{"include":"#generic_type"}]}},"match":"(?:(?:([\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*)\\\\s+)(?:(?<classConstraint>(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*|(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)(?:\\\\s*(?:\\\\s+)\\\\s*\\\\g<classConstraint>)?)))","name":"meta.class-constraint.purescript"}]},"comments":{"patterns":[{"begin":"(^[ \\\\t]+)?(?=--+\\\\s+\\\\|)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.purescript"}},"end":"(?!\\\\G)","patterns":[{"begin":"(--+)\\\\s+(\\\\|)","beginCaptures":{"1":{"name":"punctuation.definition.comment.purescript"},"2":{"name":"punctuation.definition.comment.documentation.purescript"}},"end":"\\\\n","name":"comment.line.double-dash.documentation.purescript"}]},{"begin":"(^[ \\\\t]+)?(?=--+(?![\\\\p{S}\\\\p{P}&&[^(),;\\\\[\\\\]\`{}_\\"']]))","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.purescript"}},"end":"(?!\\\\G)","patterns":[{"begin":"--","beginCaptures":{"0":{"name":"punctuation.definition.comment.purescript"}},"end":"\\\\n","name":"comment.line.double-dash.purescript"}]},{"include":"#block_comment"}]},"data_ctor":{"patterns":[{"match":"\\\\b[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*","name":"entity.name.tag.purescript"}]},"double_colon":{"patterns":[{"match":"(?:::|∷)","name":"keyword.other.double-colon.purescript"}]},"function_type_declaration":{"patterns":[{"begin":"^(\\\\s*)([\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)\\\\s*(?:(::|∷)(?!.*<-))","beginCaptures":{"2":{"name":"entity.name.function.purescript"},"3":{"name":"keyword.other.double-colon.purescript"}},"contentName":"meta.type-signature.purescript","end":"^(?!\\\\1[ \\\\t]|[ \\\\t]*$)","name":"meta.function.type-declaration.purescript","patterns":[{"include":"#double_colon"},{"include":"#type_signature"}]}]},"generic_type":{"patterns":[{"match":"\\\\b(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*","name":"variable.other.generic-type.purescript"}]},"infix_op":{"patterns":[{"match":"(?:\\\\((?!--+\\\\))[\\\\p{S}\\\\p{P}&&[^(),;\\\\[\\\\]\`{}_\\"']]+\\\\))","name":"entity.name.function.infix.purescript"}]},"kind_signature":{"patterns":[{"match":"\\\\*","name":"keyword.other.star.purescript"},{"match":"!","name":"keyword.other.exclaimation-point.purescript"},{"match":"#","name":"keyword.other.pound-sign.purescript"},{"match":"->|→","name":"keyword.other.arrow.purescript"}]},"module_exports":{"patterns":[{"begin":"\\\\(","end":"\\\\)","name":"meta.declaration.exports.purescript","patterns":[{"include":"#comments"},{"match":"\\\\b(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*","name":"entity.name.function.purescript"},{"include":"#type_name"},{"match":",","name":"punctuation.separator.comma.purescript"},{"include":"#infix_op"},{"match":"\\\\(.*?\\\\)","name":"meta.other.constructor-list.purescript"}]}]},"module_name":{"patterns":[{"match":"(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)*[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.?","name":"support.other.module.purescript"}]},"record_field_declaration":{"patterns":[{"begin":"([\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)\\\\s*(::|∷)","beginCaptures":{"1":{"patterns":[{"match":"(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*","name":"entity.other.attribute-name.purescript"}]},"2":{"name":"keyword.other.double-colon.purescript"}},"contentName":"meta.type-signature.purescript","end":"(?=([\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)\\\\s*(::|∷)|})","name":"meta.record-field.type-declaration.purescript","patterns":[{"include":"#type_signature"},{"include":"#record_types"}]}]},"record_types":{"patterns":[{"begin":"\\\\{","beginCaptures":{"0":{"name":"keyword.operator.type.record.begin.purescript"}},"end":"\\\\}","endCaptures":{"0":{"name":"keyword.operator.type.record.end.purescript"}},"name":"meta.type.record.purescript","patterns":[{"match":",","name":"punctuation.separator.comma.purescript"},{"include":"#record_field_declaration"},{"include":"#comments"}]}]},"type_name":{"patterns":[{"match":"\\\\b[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*","name":"entity.name.type.purescript"}]},"type_signature":{"patterns":[{"captures":{"1":{"patterns":[{"include":"#class_constraint"}]},"4":{"name":"keyword.other.big-arrow.purescript"}},"match":"(?:(?:\\\\()(?:(?<classConstraints>(?:(?:(?:([\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*)\\\\s+)(?:(?<classConstraint>(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*|(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)(?:\\\\s*(?:\\\\s+)\\\\s*\\\\g<classConstraint>)?))))(?:\\\\s*(?:,)\\\\s*\\\\g<classConstraints>)?))(?:\\\\))(?:\\\\s*(=>|<=|⇐|⇒)))","name":"meta.class-constraints.purescript"},{"captures":{"1":{"patterns":[{"include":"#class_constraint"}]},"4":{"name":"keyword.other.big-arrow.purescript"}},"match":"((?:(?:([\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*)\\\\s+)(?:(?<classConstraint>(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*|(?:[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*(?:\\\\.[\\\\p{Lu}\\\\p{Lt}][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)*\\\\.)?[\\\\p{Ll}_][\\\\p{Ll}_\\\\p{Lu}\\\\p{Lt}\\\\p{Nd}']*)(?:\\\\s*(?:\\\\s+)\\\\s*\\\\g<classConstraint>)?))))\\\\s*(=>|<=|⇐|⇒)","name":"meta.class-constraints.purescript"},{"match":"->|→","name":"keyword.other.arrow.purescript"},{"match":"=>|⇒","name":"keyword.other.big-arrow.purescript"},{"match":"<=|⇐","name":"keyword.other.big-arrow-left.purescript"},{"match":"forall|∀","name":"keyword.other.forall.purescript"},{"include":"#generic_type"},{"include":"#type_name"},{"include":"#comments"}]}},"scopeName":"source.purescript"}`)),t=[e];export{t as default};
