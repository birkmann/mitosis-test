import { Meta } from '~/components/common/meta'
import { Welcome } from '~/components/common/welcome'
import { PageLayout } from '~/components/layout/page'
import Button from '~/components-lib/dist/react/src/components-lib/Button/Button'

const HomePage = () => {
  return (
    <PageLayout>
      <Meta />
      <Button text="Hello world!" />
      <Welcome />
    </PageLayout>
  )
}

export default HomePage
