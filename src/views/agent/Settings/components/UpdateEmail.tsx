import { Button, Card, CardBody, CardHeader } from 'react-bootstrap'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { TextFormInput } from '@/components'

const UpdateEmail = () => {
  const emailSchema = yup.object({
    email: yup.string().email('Please enter a valid email').required('Please enter your email'),
  })
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(emailSchema),
  })
  return (
    <Card className="border">
      <CardHeader className="border-bottom">
        <h5 className="card-header-title">Update email</h5>
        <p className="mb-0 small">
          Your current email address is <span className="text-primary">example@gmail.com</span>
        </p>
      </CardHeader>

      <CardBody>
        <form onSubmit={handleSubmit(() => {})}>
          <TextFormInput name="email" label="Enter your new email id*" placeholder="Enter your email id" control={control} />
          <div className="text-end mt-3">
            <Button variant="primary" type="submit" className="mb-0">
              Save Email
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default UpdateEmail
