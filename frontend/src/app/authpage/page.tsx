import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react";

export default function AuthPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <Card className="w-full max-w-sm">
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Button asChild size="icon" className="bg-zinc-950">
                            <a href="/">
                                <ChevronLeft />
                            </a>
                        </Button>
                        <div>
                            <CardTitle>Painel de Login</CardTitle>
                            <CardDescription>
                                Faça login para acessar o sistema!
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="email@gmail.com"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Senha</Label>
                                    <a
                                        href="#"
                                        className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                    >
                                        Esqueceu sua senha?
                                    </a>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="********"
                                    required
                                />
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}

