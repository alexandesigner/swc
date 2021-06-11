use swc_ecma_parser::{Syntax, TsConfig};
use swc_ecma_transforms_compat::es2020;
use swc_ecma_transforms_testing::test;
use swc_ecma_visit::Fold;

fn tr() -> impl Fold {
    es2020::operators()
}

fn syntax() -> Syntax {
    Syntax::Typescript(TsConfig {
        ..Default::default()
    })
}

test!(syntax(), |_| tr(), logical_ident, "a ||= b", "a || (a = b)");

test!(
    syntax(),
    |_| tr(),
    logical_member,
    "a.b ||= b",
    "
    var _a;
    (_a = a).b || (_a.b = b);
    "
);

test!(
    syntax(),
    |_| tr(),
    logical_super,
    "
    class Foo {
        method() {
            return super.f ||= b
        } 
    }
    ",
    "
    class Foo {
        method() {
          return super.f || (super.f = b);
        }
    }
    "
);
