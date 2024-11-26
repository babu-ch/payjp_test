import Payjp from 'payjp';

export type RegistrationBody = {
  name: string;
  mail:string;
  phone:string;
  bankName:string;
  branchName:string;
  accountNumber:string;
  accountType:string;
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as RegistrationBody;

  // なんらかの登録処理

  // pay.jpのテナント作成
  try {
    const config = useRuntimeConfig()
    const payjp = Payjp(config.payjpSecretKey);
    await payjp.tenants.create(
      {
        name: "テナントA",
        id: 'test',
        platform_fee_rate: 10.15,
        bank_code: "0038",
        bank_branch_code: "100",
        bank_account_type: body.accountType,
        bank_account_number: body.accountNumber,
        bank_account_holder_name: body.name,
      }
    );
  } catch (e:any) {
    if (e.response) {
      console.error(e.response.text);
    }
  }


  return { }
})
